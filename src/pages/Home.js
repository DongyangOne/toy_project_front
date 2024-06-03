import React from "react";
import Header from "../components/Header";
import "../styles/home.css";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Header />
      <button
        onClick={() => {
          if (window.sessionStorage.getItem("session")) {
            navigate("/diary");
          } else {
            alert("로그인이 필요한 서비스입니다.");
<<<<<<< HEAD
            navigate("/login");
=======
>>>>>>> f8138f00a9de77ef3c26ce34f8667ec938a58398
          }
        }}
        className="writing-btn"
      >
        일기 쓰기
      </button>
      <div className="tree-container">
<<<<<<< HEAD
=======
        {/* 나무 이미지 */}
>>>>>>> f8138f00a9de77ef3c26ce34f8667ec938a58398
        <img
          src="/path/to/your/tree/image.png"
          alt="Tree"
          className="tree-image"
        />
      </div>
    </div>
  );
};
export default Home;