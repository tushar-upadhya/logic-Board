import Canvas from "../Components/Canvas";
import Home from "../Components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/draw" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
