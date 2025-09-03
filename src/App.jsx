import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AdDetail from "./pages/AdDetail"
import Reply from './pages/Reply'
import WriteAd from './pages/WriteAd'
import Preview from './pages/Preview'
import Offer from './pages/Offer'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ad-detail" element={<AdDetail />} />
        <Route path="/reply" element={<Reply />} />
        <Route path="/write-ad" element={<WriteAd />} />
        <Route path="/preview" element={<Preview />} />
        <Route path='/offer' element={<Offer />} />
      </Routes>
    </>
  )
}

export default App
