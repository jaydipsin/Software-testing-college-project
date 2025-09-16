
import { Route, Routes } from 'react-router-dom'
import EmployerRegistration from './pages/EmployerRegistration'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Internships from './components/Internships'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/internships' element={<Internships />} />
        <Route path='/post-job' element={<EmployerRegistration />} />
      </Routes>
    </>
  )
}

export default App
