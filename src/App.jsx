import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Research, Intro, MIntro, Similarity } from "./pages";
import Select from "./pages/Select";

const isMobile = window.innerWidth <= 393;

const App = () => {
  return (
    <Routes>
      {isMobile ? (
        <Route path="/" element={<MIntro />} />
      ) : (
        <Route path="/" element={<Intro />} />
      )}
      <Route path="/inputImage" element={<Main />} />
      <Route path="/research" element={<Research />} />
      <Route path="/similarity" element={<Similarity />} />
      <Route path="/select" element={<Select />} />
    </Routes>
  );
};

export default App;
