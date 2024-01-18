
import { Navigate, Routes,Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
    
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Auth></Auth>}></Route>
      <Route path='/register' element={<Auth insideRegister></Auth>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/projects' element={<Projects></Projects>}></Route>
      <Route path='/' element={<Navigate to={'/'}/>}></Route>
     </Routes>
  <Footer></Footer>
    </>
  )
}

export default App
