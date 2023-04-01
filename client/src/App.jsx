import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import logo from "./assets/logo.png";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between bg-white items-center sm:px-8 px-4 py-4 border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} className="w-15 h-13 w-20 object-contain" />
        </Link>
        <Link
          className="font-inter bg-blue-400 text-white rounded px-4 py-4"
          to="/create-post"
        >
          create post
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
