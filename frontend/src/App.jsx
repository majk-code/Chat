import { Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { useAuthContext } from './context/AuthContext'
import AnimatedLoader from './components/Loading/AnimatedLoader'

function App() {
  const {authUser} = useAuthContext()
  return (
      <div className='app'>
        <Routes>
          <Route path="/" element={authUser ? <Home/> : <Navigate to='/login'/>}/>
          <Route path="/login" element={authUser ? <Navigate to='/'/> : <Login  />}/>
          <Route path="/signup" element={authUser ? <Navigate to='/'/> : <SignUp />}/>
        </Routes>
        <AnimatedLoader/>
      </div>
  )
}

export default App;
