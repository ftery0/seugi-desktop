import React, { useState, ChangeEvent } from 'react';
import axios, { AxiosError } from 'axios';
import * as S from './createRoomPlus.style'; 

import AvatarImg from '@/assets/image/chat-components/Avatar.svg';
import NonClicked from '@/assets/image/chat-components/nonClick.svg';
import Clicked from '@/assets/image/chat-components/clicked.svg';
import SearchIcon from '@/assets/image/sidebar/Findicon.svg';

interface Member {
  id: number;
  name: string;
  department: string;
}

interface CreateRoomPlusProps {
  onClose: () => void;
  onCreateRoom: (roomName: string) => void;
}

const CreateRoomPlus: React.FC<CreateRoomPlusProps> = ({ onClose, onCreateRoom }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Member[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const dummyData: Member[] = [
    { id: 1, name: '박재욱', department: '2-1' },
    { id: 2, name: '박병준', department: '2-1' },
    { id: 3, name: '이슬아', department: '2-4' },
    { id: 4, name: '배채희', department: '2-4' },
    { id: 5, name: '양예성', department: '2-1' },
    { id: 6, name: '한준혁', department: '2-3' },
  ];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === '') {
      setSearchResult([]);
    } else {
      const result = dummyData.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.department.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResult(result);
    }
  };

  const handleMemberClick = (id: number) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((memberId) => memberId !== id) : [...prev, id]
    );
  };

  const handleContinueClick = async () => {
    if (selectedMembers.length > 1) {
      try {
        const requestData = {
          workspaceId: "669e339593e10f4f59f8c583",
          joinUsers: Array.from(selectedMembers),
          roomName: `Group Chat (${selectedMembers.length} members)`,
          chatRoomImg: "",
        };

        const response = await axios.post('https://api.seugi.com/chat/group/create', requestData, {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`,
          },
        });

        if (response.status === 401) {
          alert('Session expired. Please login again.');
          setAccessToken(null); // Clear the token
          return;
        }

        const result = response.data;

        console.log("Room created successfully:", result);
        onCreateRoom(result);
        onClose();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            alert('Session expired. Please login again.');
            setAccessToken(null); // Clear the token
            return;
          }
          console.error(`An error occurred: ${error.message}`);
          alert('에러가 발생했습니다. 다시 시도해주세요.');
        } else {
          console.error('Unexpected error:', error);
          alert('An unexpected error occurred.');
        }
      }
    } else {
      alert('두 명 이상의 멤버를 선택해주세요.');
    }
  };

  const combinedResults = [
    ...selectedMembers.map((id) => dummyData.find((item) => item.id === id)!).filter(Boolean),
    ...searchResult.filter((item) => !selectedMembers.includes(item.id)),
  ];

  return (
    <S.CreateRoomPlusBox>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <S.ChatRoomName>채팅방 멤버</S.ChatRoomName>
        <S.ChatRoomButton onClick={handleContinueClick}>계속하기</S.ChatRoomButton>
      </div>
      <S.InviteMemberWrap>
        <S.InviteMember
          type="text"
          placeholder="이름, 소속 등을 입력해 주세요"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <S.SearchIconImg src={SearchIcon}/>
      </S.InviteMemberWrap>
      <S.ScrollableMemberList>
        {combinedResults.map((item) => (
          <S.PlusMemberClick key={item.id} onClick={() => handleMemberClick(item.id)}>
            <S.AvatarProfileWrap>
              <S.AvatarProfile src={AvatarImg} />
            </S.AvatarProfileWrap>
            <S.InviterName>{item.name}</S.InviterName>
            <S.PlusButtonCheck>
              {selectedMembers.includes(item.id) ? (
                <img src={Clicked} alt="Clicked" />
              ) : (
                <img src={NonClicked} alt="NonClicked" />
              )}
            </S.PlusButtonCheck>
          </S.PlusMemberClick>
        ))}
      </S.ScrollableMemberList>
    </S.CreateRoomPlusBox>
  );
};

export default CreateRoomPlus;