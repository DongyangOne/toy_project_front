import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { join, checkIdDuplicate } from '../apiCalls';
import "../styles/join.css";
import Header from "../components/Header";

const Join = () => {
  const [id, setId] = useState(''); 
  const [pwd, setPwd] = useState(''); 
  const [pwdCheck, setPwdCheck] = useState('');
  const navigate = useNavigate();

  const handleCheckId = async () => {
    if (!id) {
      alert('아이디를 입력해주세요.');
      return;
    }
    try {
      const response = await checkIdDuplicate(id);
      if (response.isDuplicate) {
        alert('이미 존재하는 아이디입니다.');
      } else {
        alert('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      alert('아이디 중복 확인 중 오류가 발생했습니다.');
    }
  };

  const handleJoin = async () => {
    if (!id || !pwd || !pwdCheck) {
      alert('아이디/비밀번호를 입력해주세요');
      return;
    }
    if (pwd !== pwdCheck) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
    try {
      await join(id, pwd);
      navigate('/login'); 
    } catch (error) {
   
    }
  };

  return (
    <div className="join-container">
      <Header />
      <div className="join-form">
        <h2>Sign up</h2>
        <label className="join-label">아이디</label>
        <input
          className="join-input1"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력하세요"
        />
        <button onClick={handleCheckId} className="checkbutton">중복 확인</button>
        <label className="join-label">비밀번호</label>
        <input
          className="join-input2"
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
        <label className="join-label">비밀번호 확인</label>
        <input
          className="join-input2"
          type="password"
          value={pwdCheck}
          onChange={(e) => setPwdCheck(e.target.value)}
          placeholder="비밀번호를 다시 입력하세요"
        />
        <button onClick={handleJoin} className="join-button">회원가입</button>
      </div>
    </div>
  );
};

export default Join;
