import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./Components/Header/Header";
import DetailPage from "./pages/DetailPage/DetailPage";
import LearnHook from "./pages/LearnHook/LearnHook";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ReduxHook from "./pages/ReduxHook/ReduxHook";
import GameXucXac from "./pages/GameXucXac/GameXucXac";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* 1 page ~ 1 Route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="learn-hook" element={<LearnHook />} />
        {/* not found page */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="redux-hook" element={<ReduxHook />} />
        <Route path="game-xuc-xac" element={<GameXucXac />} />
      </Routes>
    </div>
  );
}

export default App;
