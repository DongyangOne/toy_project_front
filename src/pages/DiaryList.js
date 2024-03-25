import DiaryListItem from "../components/DiaryListItem";
import Header from "../components/Header";
import "../styles/diary-list.css";
const DiaryList = () => {
  return (
    <div>
      <Header />
      <div className="diaryList">
        <DiaryListItem />
        <DiaryListItem />
        <DiaryListItem />
        <DiaryListItem />
      </div>
    </div>
  );
};

export default DiaryList;
