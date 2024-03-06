const DiaryListItem = Props => {
  return (
    <>
      <div className="diary-item">
        <div className="Lleft">
          <div className="Ldate">2024.02.09</div>
          <div className="Ltitle">오늘의 일기 - 날씨가 흐려서 아쉬웠던 날</div>
        </div>
        <div className="Lweather">날씨 : 흐림</div>
      </div>
    </>
  );
};

export default DiaryListItem;
