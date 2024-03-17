import React from 'react';
import Header from '../components/Header'; 
import '../styles/home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <Header />
       <button className="writing-btn">일기 쓰기</button>
      <div className="tree-container">
       
        {/* 나무 이미지 */}
        <img src="/path/to/your/tree/image.png" alt="Tree" className="tree-image"/>
      </div>
    </div>
  );
};

export default Home;
