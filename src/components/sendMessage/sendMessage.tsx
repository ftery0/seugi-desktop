import React, { useState } from 'react';
import * as S from "../sendMessage/sendMessage.style"; 

import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/assets/image/chat-components/SendArrowBlue.svg";

const SendMessage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log(message); 

    setIsClicked(prevState => !prevState);

    setTimeout(() => {
      setIsClicked(false);
      setMessage(""); 
    }, 1000);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick(); // Enter 키를 눌렀을 때 handleClick 함수 호출
    }
  };

  return (
    <S.SendMessageWrap>
        <S.PlustFileButton>
            <S.PlusMessageFile src={PlusMessageFile}/>
        </S.PlustFileButton> 
        <S.SendMessageInput 
          type="text" 
          placeholder="메세지 보내기"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress} 
        />
        <S.SendArrowButton onClick={handleClick}>
          {isClicked ? (
            <S.SendArrow src={SendArrowBlue} alt="Send Message" style={{width: '22.89px', height: "22.89px"}}/> 
          ) : (
            <S.SendArrow src={SendArrow} alt="Send Message" />

          )}
        </S.SendArrowButton>
    </S.SendMessageWrap>
  );
}
export default SendMessage 
//