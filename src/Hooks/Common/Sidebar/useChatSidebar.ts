import { useEffect, useState } from "react";
import axios, { AxiosInstance } from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export const SeugiCustomAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
});

const useChatSidebar = (onSelectChatRoom: (room: string) => void, pathname: string) => {
  const [searchText, setSearchText] = useState("");
  const [chatRooms, setChatRooms] = useState<string[]>([]);

  useEffect(() => {
    fetchChatRooms();
  }, [pathname]);

  const fetchChatRooms = async () => {
    try {
      const response = await SeugiCustomAxios.get('/chat/rooms');
      const rooms = response.data;

      // 경로에 따라 개인 또는 단체 채팅방만 필터링
      if (pathname === "/chat") {
        setChatRooms(rooms.filter((room: any) => room.type === "personal"));
      } else if (pathname === "/groupchat") {
        setChatRooms(rooms.filter((room: any) => room.type === "group"));
      }
    } catch (error) {
      console.error("Error fetching chat rooms:", error);
    }
  };

  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      const roomFound = chatRooms.includes(searchText);

      if (roomFound) {
        handleChatRoomClick(searchText);
      } else {
        await createRoom(searchText);
      }

      setSearchText("");
    }
  };

  const createRoom = async (roomName: string) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");

      if (!accessToken) {
        console.error("Access token not found. Please log in again.");
        return;
      }

      const requestData = {
        workspaceId: "669e339593e10f4f59f8c583", 
        roomName: roomName,
        joinUsers: [10],
        chatRoomImg: "",
      };

      const response = await SeugiCustomAxios.post('/chat/personal/create', requestData, {
        headers: {
          'Authorization': accessToken,
        },
      });

      if (response.status === 200) {
        addChatRoom(roomName);
        handleChatRoomClick(roomName);
      } else {
        console.error(`Error creating room: ${response.data}`);
      }
    } catch (error) {
      console.error(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const addChatRoom = (roomName: string) => {
    console.log(`Adding chat room: ${roomName}`);
    setChatRooms((prevRooms) => {
      if (!prevRooms.includes(roomName)) {
        return [...prevRooms, roomName];
      }
      return prevRooms;
    });
  };

  const handleChatRoomClick = (roomName: string) => {
    onSelectChatRoom(roomName);
    console.log(`Clicked on chat room: ${roomName}`);
  };

  return {
    searchText,
    setSearchText,
    chatRooms,
    handleSearch,
    handleChatRoomClick,
  };
};

export default useChatSidebar;