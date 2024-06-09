import { BrowserRouter, Route, Routes } from "react-router-dom";

import DetailsBlog from "./Pages/DetailsBlog";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<DetailsBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
