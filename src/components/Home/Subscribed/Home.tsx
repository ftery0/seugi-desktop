import React, { useState, useEffect } from "react";

import * as S from "@/components/Home/Subscribed/Home.style";
import Navbar from "@/components/Navbar/Navbar";

import initialConfig from "@/constants/Home/config.json";

import HomeBookImg from "@/assets/image/home/homebook.svg";

import ArrowImg from "@/assets/image/home/arrow.svg";

import { isTokenExpired } from "@/util/tokenUtils";
import { useNavigate } from "react-router-dom";

import Schools from '@/components/Home/Schools/Schools';
import Meal from "@/components/Home/Meal/Meal";
import CatSeugi from "@/components/Home/CatSeugi/CatSeugi";
import Calendar from "@/components/Home/Calendar/Calendar";
import Notification from '@/components/Home/Notification/Notification';

const Home: React.FC = () => {
  const token = window.localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (isTokenExpired(token)) {
      alert("세션이 만료되었습니다. 다시 로그인 해주세요.");
      window.localStorage.removeItem("accessToken");
      navigate("/");
    }
  }, [token, navigate]);

  const [config, setConfig] = useState(() => {
    const savedConfig = localStorage.getItem("config");
    return savedConfig ? JSON.parse(savedConfig) : initialConfig;
  });


  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(config));
  }, [config]);

  const numberLoop = () => {
    const numbers = [];

    for (let i = 1; i < config.subject.length + 1; i++) {
      i === config.today
        ? numbers.push(<S.Number className="Today">{i}</S.Number>)
        : numbers.push(<S.Number>{i}</S.Number>);
    }

    return numbers;
  };

  const itemLoop = () => {
    const items = [];

    for (let i = 0; i < config.today; i++) {
      if (config.today === 1)
        items.push(
          <S.Item className="First Today Last">{config.subject[i]}</S.Item>
        );
      else if (i === 0)
        items.push(<S.Item className="First">{config.subject[i]}</S.Item>);
      else if (i === config.today - 1)
        items.push(<S.Item className="Today Last">{config.subject[i]}</S.Item>);
      else items.push(<S.Item>{config.subject[i]}</S.Item>);
    }

    for (let i = config.today; i < config.subject.length; i++) {
      if (i === config.subject.length - 1)
        items.push(<S.Item className="After Last">{config.subject[i]}</S.Item>);
      else items.push(<S.Item className="After">{config.subject[i]}</S.Item>);
    }

    return items;
  };

  const handleEmojiClick = (parentKey: number, childKey: number) => {
    setConfig((prevConfig: any) => {
      const newConfig = JSON.parse(JSON.stringify(prevConfig));

      if (prevConfig.notification[parentKey].like[childKey] === true) {
        newConfig.notification[parentKey].like[childKey] = false;
        newConfig.notification[parentKey].emoji[childKey] -= 1;
      } else {
        newConfig.notification[parentKey].like[childKey] = true;
        newConfig.notification[parentKey].emoji[childKey] += 1;
      }

      return newConfig;
    });
  };
  return (
    <S.HomeContainer>
      <Navbar />
      <S.HomeMain>
        <S.HomeTitle>홈</S.HomeTitle>
        <S.ComponentsBox>
          <S.HomeWrapper1>
            <S.HomeWrapper1UpContainer>
              <S.ScheduleTitleBox>
                <S.ScheduleTitleDiv>
                  <S.BookLogo src={HomeBookImg} />
                  <S.DailyScheduleTitle>오늘의 시간표</S.DailyScheduleTitle>
                </S.ScheduleTitleDiv>
                <S.ArrowLButton>
                  <S.ArrowLogo src={ArrowImg} />
                </S.ArrowLButton>
              </S.ScheduleTitleBox>
              <S.ScheduleDivBox>
                <S.NumberTable>{numberLoop()}</S.NumberTable>
                <S.ItemTable>{itemLoop()}</S.ItemTable>
              </S.ScheduleDivBox>
            </S.HomeWrapper1UpContainer>
            <S.HomeWrapper1DownContainer>
              <Notification />
              <S.RightContainer>
                <Calendar />
                <CatSeugi/>
              </S.RightContainer>
            </S.HomeWrapper1DownContainer>
          </S.HomeWrapper1>

          <S.HomeWrapper2>
            <Schools />
            <Meal />
          </S.HomeWrapper2>
        </S.ComponentsBox>
      </S.HomeMain>
    </S.HomeContainer>
  );
};

export default Home;
