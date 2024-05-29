import React, { useState } from 'react';
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import { createDiary } from '../apiCalls';
import "../styles/create-diary.css";

const Creatediary = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [weather, setWeather] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);

  const handleDiarySubmit = async () => {
    if (!title || !content || !weather) {
      alert('입력되지 않은 칸이 있습니다.');
      return;
    }
    
    if (content.length < 30) {
      alert('내용을 더 입력해주세요');
      return;
    }
    
    try {
      await createDiary(title, content, weather);
      navigate('/');
    } catch (error) {
      alert('일기 작성 중 오류가 발생했습니다.');
    }
  };



  const date = new Date();
  return (
    <>
      <Header />
      <div className="create-diary">
        <div className="diary-form">
          <div className="dateInput">
            <label>날짜</label>
            <div className="date">{`${date.getFullYear()}.${(
              "0" +
              (date.getMonth() + 1)
            ).slice(-2)}.${("0" + date.getDate()).slice(-2)}`}</div>
          </div>
          <div className="title-weather">
            <div className="title">
              <label>제목</label>
              <input
                className="title-input"
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="제목을 입력해주세요."
              />
            </div>
            <div className="weather">
              <label>날씨</label>
              <input
                className="weather-input"
                type="text"
                value={weather}
                onChange={handleWeatherChange}
                placeholder="날씨를 입력해주세요."
              />
            </div>
          </div>
          <div className="content">
            <label>내용</label>
            <textarea
              className="content-input"
              value={content}
              onChange={handleContentChange}
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
          <div className="btnWrap">
            <button className="diarySubmitBtn" onClick={handleDiarySubmit}>작성완료</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creatediary;
