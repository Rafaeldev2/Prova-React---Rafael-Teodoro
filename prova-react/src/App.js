import { Route, Routes } from 'react-router'
import Footer from './Components/footer'
import Header from './Components/header'
import Galeria from './Pages/galeria'
import Home from './Pages/home'

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}