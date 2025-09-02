import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AdDetail from "./pages/AdDetail"
import Reply from './pages/Reply'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ad-detail" element={<AdDetail />} />
        <Route path="/reply" element={<Reply />} />
      </Routes>
    </>
  )
}

export default App
