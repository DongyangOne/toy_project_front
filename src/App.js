import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Creatediary from "./pages/Creatediary";
import DiaryList from "./pages/DiaryList";
import DiaryDetail from "./pages/DiaryDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/diary" element={<Creatediary />}></Route>
          <Route path="/diary-list" element={<DiaryList />}></Route>
          <Route path="/diary-detail/*" element={<DiaryDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
