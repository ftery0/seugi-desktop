import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  width: 1440px;
  height: 1024px;
  align-items: flex-start;
`;

export const HomeMain = styled.div`
  display: flex;
  padding: 64px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;

  width: 100vw;

  background: var(--Primary-Primary050, #f8fcff);

  margin-left: 4%;
`;

export const ComponentsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  margin-left: 1%;
`;

export const HomeTitle = styled.h1`
  margin-left: 1.5%;

  position: relative;

  width: 100%;
  height: 100%;

  color: var(--Black, #000);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const HomeWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
`;

export const HomeWrapper2 = styled.div`
  display: flex;
  width: 420px;
  height: 440px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const HomeWrapper1UpContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border-radius: 12px;
  background: #fff;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const ScheduleTitleBox = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
`;

export const HomeWrapper1DownContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

export const LeftContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;

  border-radius: 12px;
  background: #fff;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);

  width: 422px;
  height: 658px;
`;

export const NotificationContainer = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const TitleContainer = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
`;

export const RightUpContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border-radius: 12px;
  background: #fff;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const RightDownContainer = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  border-radius: 12px;
  background: #fff;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const SeugiTitleContainer = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const UpContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  border-radius: 12px;
  background: var(--Sub-White, #fff);

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const DownContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 12px;
  background: #fff;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const SoonScheduleBox = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const BookLogo = styled.img`
  position: relative;
`;

export const DailyScheduleTitle = styled.h2`
  margin-left: 8px;

  color: #000;

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const NumberTable = styled.div`
  display: flex;

  position: relative;

  top: 10px;
`;

export const Number = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  color: var(--Primary-Primary300, #7ec4fc);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 18.2px */

  &.Today {
    color: var(--Primary-Primary500, #1d93f3);
  }

  width: 120px;
  height: 34px;
`;

export const ItemTable = styled.table`
  display: flex;

  position: relative;

  background-color: var(--Primary-Primary300, #7ec4fc);

  border-radius: 20px;

  top: 10px;
`;

export const Item = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 120px;
  height: 34px;

  color: var(--Primary-Primary200, #b1dbfd);

  background-color: var(--Primary-Primary500, #1d93f3);

  &.First {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  &.Last {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &.Today {
    color: white;
  }

  &.After {
    background-color: var(--Primary-Primary300, #7ec4fc);
  }
`;

export const NotificationLogo = styled.img`
  width: 32px;
  height: 32px;
`;

export const NotificationTitle = styled.h2`
  position: relative;

  left: 8px;

  color: var(--Black, #000);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */

  margin-right: 78%;
`;

export const NArrowLogo = styled.img`
  position: relative;
`;

export const ArrowLogo = styled.img`
  position: relative;

  left: 695px;
`;

export const ScheduleBox = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: #fff;

  padding: 12px;

  border-radius: 12px;

  width: 422px;
  height: 270px;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const CalendarLogo = styled.img`
  width: 32px;
  height: 32px;

  margin-right: 8px;
`;

export const ScheduleTitle = styled.span`
  color: var(--Black, #000);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  margin-right: 60%;
`;

export const ArrowLButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
`;

export const SArrowLogo = styled.img`
  position: relative;
`;

export const CatSeugiBox = styled.div`
  position: relative;

  background-color: #fff;

  padding: 12px;

  border-radius: 12px;

  width: 422px;
  height: 270px;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const SeugiImg = styled.img`
  width: 28px;
  height: 28px;

  margin-right: 8px;
`;

export const CatSeugiTitle = styled.span`
  color: var(--Black, #000);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

  margin-right: 73%;
`;

export const CArrowLogo = styled.img`
  position: relative;
`;

export const SchoolImg = styled.img`
  width: 28px;
  height: 28px;

  margin-right: 8px;
`;

export const SchoolTitleBox = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const MySchooliTitle = styled.span`
  color: var(--Sub-Black, #000);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;
export const CafeteriaTitleBox = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const CafeteriaImg = styled.img`
  width: 28px;
  height: 28px;

  margin-right: 8px;
`;

export const CafeteriaTitle = styled.p`
  color: var(--Black, #000);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */

  margin-right: 65%;
`;

export const DummyBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const DateDummy = styled.div`
  display: flex;
  padding: 4px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  border-radius: 8px;
`;

export const DateText = styled.span`
  color: var(--Primary-Primary500, #1d93f3);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 18.2px */
`;

export const SubDummy = styled.div`
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const SubTitle = styled.span`
  color: #000;

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
`;

export const D_DayDummy = styled.div`
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  border-radius: 8px;
`;

export const D_DayText = styled.span`
  color: var(--Gray-Gray600, #787878);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 15.6px */
`;

export const CatSeugi = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 99px;
  border: 1.5px solid var(--Gradient-Primary, #1c8df4);
  background: var(--Sub-White, #fff);
`;

export const CatSeugiInput = styled.input`
  width: 100%;
  height: 29px;
  border: none;
  &::placeholder {
    color: var(--Gray-Gray500, #aaa);

    font-family: "Pretendard-Regular", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

  &:focus {
    outline: none;
  }

  padding: 0 0 0 4px;
`;

export const SearchImg = styled.img`
  padding: 0 4px 0 0;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const LastQuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const LastText = styled.div`
  display: flex;
  padding: 0px 4px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const Lastweek = styled.span`
  color: var(--Sub-Black, #000);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const LastQuestion = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 4px;
  background: var(--Gray-Gray100, #f4f5f9);
`;

export const QuestionText = styled.span`
  color: var(--Black, #000);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const QuestionDay = styled.span`
  color: var(--Gray-Gray600, #787878);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const CafeteriaDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const TimeButton = styled.button`
  border: none;
  background: none;

  cursor: pointer;
`;

export const Breakfast = styled.span`
  color: var(--Sub-Black, #000);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const Lunch = styled.span`
  color: var(--Gray-Gray600, #787878);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const Dinner = styled.span`
  color: var(--Gray-Gray600, #787878);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const MenuList = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  border-radius: 8px;
  background: var(--Gray-Gray100, #f4f5f9);
`;

export const Menu = styled.span`
  color: var(--Gray-Gray700, #333);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const SchoolBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const SchoolName = styled.span`
  color: var(--Gray-Gray600, #787878);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const ChangeSchool = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: var(--Gray-Gray100, #f4f5f9);

  color: var(--Gray-Gray600, #787878);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  border: none;

  cursor: pointer;
`;
