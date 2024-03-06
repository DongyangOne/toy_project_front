import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Creatediary from "./pages/Creatediary";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/diary" element={<Creatediary />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
