import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Creatediary from "./pages/Creatediary";
import DiaryList from "./pages/DiaryList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/diary" element={<Creatediary />}></Route>
          <Route path="/diary-list" element={<DiaryList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
