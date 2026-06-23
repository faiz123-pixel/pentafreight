import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pentakuhl from "./pages/Pentakuhl";
import Home from "./pages/Home";
import Industries from "./pages/Industries";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pentakuhl" element={<Pentakuhl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;