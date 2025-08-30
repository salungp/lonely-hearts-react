import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdDetail from "./pages/AdDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ad-detail" element={<AdDetail />} />
      </Routes>
    </>
  )
}

export default App
