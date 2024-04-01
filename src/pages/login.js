import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../apiCalls';
import Header from '../components/Header';
import '../styles/login.css';

const Login = () => {
  const [id, setId] = useState(''); 
  const [pwd, setPwd] = useState(''); 
  const navigate = useNavigate();

  const handleIdChange = (e) => setId(e.target.value); 
  const handlePwdChange = (e) => setPwd(e.target.value); 

  const handleLogin = async () => {
    try {
      await login(id, pwd);
      navigate('/');
    } catch (error) {
      alert('아이디/비밀번호가 다릅니다.'); 
    }
  };

  return (
    <div className="login-container">
      <Header />
      <div className="login-form">
        <h2>Sign in</h2>
        <label htmlFor="login-id" className="login-label">아이디</label>
        <input
          id="login-id"
          className="login-input"
          type="text"
          value={id}
          onChange={handleIdChange}
          placeholder="아이디를 입력하세요"
        />
        <label htmlFor="login-password" className="login-label">비밀번호</label>
        <input
          id="login-password"
          className="login-input"
          type="password"
          value={pwd}
          onChange={handlePwdChange}
          placeholder="비밀번호를 입력하세요"
        />
        <button onClick={handleLogin} className="login-button">로그인</button>
        <div className="link-container" onClick={() => navigate("/join")}>
          <p>아이디가 없으신가요? 회원가입하기</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
