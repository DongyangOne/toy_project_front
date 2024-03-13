import {useParams} from "react-router-dom";
import Header from "../components/Header";
import "../styles/diary-detail.css";

const DiaryDetail = () => {
  const {id} = useParams();
  return (
    <>
      <Header />
      <div className="diaryDetail">
        <div className="diary-form">
          <div className="dateInput">
            <label>날짜</label>
            <div className="date">2024.02.13</div>
          </div>
          <div className="title-weather">
            <div className="title">
              <label>제목</label>
              <div className="title-input" type="text">
                오늘
              </div>
            </div>
            <div className="weather">
              <label>날씨</label>
              <div className="weather-input" type="text">
                흐림
              </div>
            </div>
          </div>
          <div className="content">
            <label>내용</label>
            <div
              className="content-input"
              placeholder="내용을 입력해주세요."
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiaryDetail;
