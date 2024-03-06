import Header from "../components/Header";
import "../styles/create-diary.css";

const Creatediary = () => {
  return (
    <>
      <Header />
      <div className="create-diary">
        <div className="diary-form">
          <div className="dateInput">
            <label>날짜</label>
            <div className="date">2024.03.06</div>
          </div>
          <div className="title-weather">
            <div className="title">
              <label>제목</label>
              <input
                className="title-input"
                type="text"
                placeholder="제목을 입력해주세요."
              />
            </div>
            <div className="weather">
              <label>날씨</label>
              <input className="weather-input" type="text" placeholder="날씨" />
            </div>
          </div>
          <div className="content">
            <label>내용</label>
            <textarea
              className="content-input"
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
          <div className="btnWrap">
            <button className="diarySubmitBtn">작성완료</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creatediary;
