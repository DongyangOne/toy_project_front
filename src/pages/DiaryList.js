import React, { useEffect, useState } from "react";
import DiaryListItem from "../components/DiaryListItem";
import Header from "../components/Header";
import { getUserDiaries } from "../apiCalls"; 
import "../styles/diary-list.css";

const DiaryList = ({ userId }) => {
  const [diaries, setDiaries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDiaries() {
      try {
        const data = await getUserDiaries(userId);
        setDiaries(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchDiaries();
  }, [userId]); 

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (diaries.length === 0) {
    return <div>No diaries found.</div>;
  }

  return (
    <>
      <Header />
      <div className="diaryList">
        {diaries.map((diary) => (
          <DiaryListItem
          key={diary.id}
          id={diary.id}
          date={diary.date}
          title={diary.title}
          weather={diary.weather}
          />
        ))}
      </div>
    </>
  );
};

export default DiaryList;
