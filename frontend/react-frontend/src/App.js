import React from 'react';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Registration from './view/Registration.jsx';
import Homepage from './view/Homepage.jsx';
import Login from './view/Login.jsx';
import UserDashboard from './view/UserDashboard.jsx'
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/UserDashboard' element={<UserDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
