import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import PersonalInfo from './pages/PersonalInfoPage/PersonalInfo'

function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/personal-info' element={<PersonalInfo/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
