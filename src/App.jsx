import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Signup from './Authentication/Signup';
import Signin from './Authentication/Signin';
import Home from './Pages/Home';
const App = () => {
  const userToken = localStorage.getItem('token');
  return (
    <Router>
    <Routes>
       {/* Authentication pages */}
       <Route path='/' element={<Signup />} />
       <Route path='/login' element={!userToken ? <Signin /> : <Navigate replace to={'/'} />} />
       <Route path='/home' element={<Home />} />
       </Routes>
       </Router>
  )
}

export default App