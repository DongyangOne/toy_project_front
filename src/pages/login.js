import React, { useState } from 'react';
import '../styles/login.css'; // 경로 확인

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', id, password);
    // 로그인 로직 추가
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign in</h2>
        <label htmlFor="login-id" className="login-label">아이디</label>
        <input
          id="login-id"
          className="login-input"
          type="text"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="login-password" className="login-label">비밀번호</label>
        <input
          id="login-password"
          className="login-input"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>로그인</button>
        <div className="link-container">
          <p>아이디가 없으신가요? <a href="/register">회원가입하기</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
