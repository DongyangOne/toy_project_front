import React, {useState} from "react";
import "../styles/join.css";
import Header from "../components/Header";

const Join = () => {


  return (
    <div className="join-container">
      <Header />
      <div className="join-form">
        <h2>Sign up</h2>
        <label className="join-label">아이디</label>
        <input
          className="join-input1"
          type="text"
          placeholder="아이디를 입력하세요"
        />
        <button className="checkbutton">
          중복 확인
        </button>

        <label className="join-label ">비밀번호</label>
        <input
          className="join-input2"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <label className="join-label ">비밀번호 확인</label>
        <input
          className="join-input2"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
        />
        <button className="join-button">
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Join;
