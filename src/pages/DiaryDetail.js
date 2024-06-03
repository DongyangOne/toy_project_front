import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/diary-detail.css"
import { useParams } from "react-router-dom";
import { getDiaryById } from "../apiCalls"; 

const DiaryDetail = () => {
  const { id } = useParams();
  const [diary, setDiary] = useState({});

  useEffect(() => {
    async function fetchDiary() {
      try {
        const diaryData = await getDiaryById(id); 
        setDiary(diaryData);
      } catch (error) {
        console.error("Error fetching diary:", error);
      }
    }

    fetchDiary();
  }, [id]); 

  return (
    <>
      <Header />
      <div className="diaryDetail">
        <div className="diary-form">
          <div className="dateInput">
            <label>날짜</label>
            <div className="date">{diary.date}</div>
          </div>
          <div className="title-weather">
            <div className="title">
              <label>제목</label>
              <div className="title-input" type="text">
                {diary.title}
              </div>
            </div>
            <div className="weather">
              <label>날씨</label>
              <div className="weather-input" type="text">
                {diary.weather}
              </div>
            </div>
          </div>
          <div className="content">
            <label>내용</label>
            <div className="content-input">{diary.content}</div>
          </div>
          <button className="diarySubmitBtn">작성완료</button>
        </div>
      </div>
    </>
  );
};

export default DiaryDetail;
