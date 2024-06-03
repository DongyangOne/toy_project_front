import {useNavigate} from "react-router-dom";

const DiaryListItem = ({ id, date, title, weather }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="diary-item"
        onClick={() => {
          navigate(`/diary-detail/${id}`);  
        }}
      >
        <div className="Lleft">
        <div className="Ldate">{date}</div>
        <div className="Ltitle">{title}</div>
      </div>
      <div className="Lweather">날씨: {weather}</div>
      </div>
    </>
  );
};

export default DiaryListItem;