
import SelectSchool from '@/Pages/Workspace/Selectschool/SelectSchoolPage';
import SchoolCode from '@/Pages/Workspace/Schoolcode/SchoolCodePage';
import JoinSuccess from '@/Pages/Workspace/JoinSuccess/JoinSuccessPage';
import Login from '@/Pages/OnBording/Login/LoginPage';
import Selectingjob from '@/Pages/Workspace/Selectjob/SelectJobPage';
import ChatMain from '@/Pages/chat/chat'
import Emailsignup from '@/Pages/OnBording/EmailSignUp/EmailSignUpPage';
import CreateSchool from '@/Pages/Workspace/CreateSchool/CreateSchoolPage';
import Authentication from '@/Pages/OnBording/EmailAuthentication/EmailAuthenticationPage';
import WaitingJoin from '@/Pages/Workspace/WaitingJoin/WaitingJoinPage';
import Home from '@/Pages/Home/home'
import Chat from '@/Pages/chat/chat'
import GroupChat from '@/Pages/GroupChat/index'
import UnHome from '@/Components/Home/NotSubscribed/UnHome';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/selectjob" element={<Selectingjob />} />
        <Route path="/chat" element={<ChatMain />} />
        <Route path="/emailsignup" element={<Emailsignup />} />
        <Route path="/selectschool" element={<SelectSchool />} />
        <Route path="/schoolcode" element={<SchoolCode />} />
        <Route path="/joinsuccess" element={<JoinSuccess />} />
        <Route path="/createschool" element={<CreateSchool />} />
        <Route path="/emailauthentication" element={<Authentication />} />
        <Route path="/waitingjoin" element={<WaitingJoin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/GroupChat" element={<GroupChat />} />
        <Route path="/unhome" element={<UnHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
