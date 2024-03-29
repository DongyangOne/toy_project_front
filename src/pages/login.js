import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom'; 
import '../styles/login.css'; 

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  return (
    <div className="login-container">
      <Header /> 
      <div className="login-form">
        <h2>Sign in</h2>
        <label htmlFor="login-id" className="login-label">
          아이디
        </label>
        <input
          id="login-id"
          className="login-input"
          type="text"
          placeholder="아이디를 입력하세요"
        />
        <label htmlFor="login-password" className="login-label">
          비밀번호
        </label>
        <input
          id="login-password"
          className="login-input"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button className="login-button">로그인</button>
        <div className="link-container"
          onClick={() => navigate("/join")}>
          <p>아이디가 없으신가요? 회원가입하기</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
