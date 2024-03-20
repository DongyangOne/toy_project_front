import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/join.css'; // Make sure the path is correct

const Join = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('Signing up with:', id, email, password);
    // Add sign-up logic here
  };

  const handleDuplicateCheck = () => {
    console.log('Checking for duplicate id:', id);
    // Add ID duplication check logic here
  };

  return (
    <div className="join-container">
      <Header />
      <div className="join-form">
        <h2>Sign up</h2>
        <label className='join-label '>아이디</label>
        <div className="id-container">
          <input
            className="join-input1"
            type="text"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="checkbutton" onClick={handleDuplicateCheck}>중복 확인</button>
        </div>
        <label className='join-label '>비밀번호</label>
        <input
          className="join-input2"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className='join-label '>비밀번호 확인</label>
        <input
          className="join-input2"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="join-button" onClick={handleSignUp}>회원가입</button>
      </div>
    </div>
  );
};

export default Join;
