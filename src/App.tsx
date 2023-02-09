import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EducationPage from './pages/EducationPage/EducationPage'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import LandingPage from './pages/LandingPage/LandingPage'
import PersonalInfo from './pages/PersonalInfoPage/PersonalInfo'

function App() {
  
  
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/personal-info' element={<PersonalInfo/>}/>
        <Route path='/experience-page' element={<ExperiencePage/>}/>
        <Route path='/education-page' element={<EducationPage/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
