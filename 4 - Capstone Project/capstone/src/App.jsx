import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reserve from './pages/Reserve'
import ReservationConfirm from './pages/ReservationConfirm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/reserve-confirmation" element={<ReservationConfirm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
