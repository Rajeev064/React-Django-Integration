import React from 'react';
import Indexbody from './Components/Indexbody';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LogIn from './Components/LogIn';
import Footer from './Components/Footer';
import UpcomingConferences from './Components/UpcomingConferences';
import Chat from './Components/Chat';
import Papers from './Components/Papers';

function App() {
  return (
    // <LogIn/>
    <Router>
        <Routes>
          <Route exact path="/" element={<><Indexbody/><Footer/></>}/>
          <Route exact path="/login" element={<LogIn/>}/>
          <Route exact path="/upcomingconf" element={<><Navbar/><UpcomingConferences/></>}/>
          <Route exact path="/chat" element={<><Navbar/><Chat/></>}/>
          <Route exact path="/research" element={<><Navbar/><Papers/><Footer/></>}/>
        </Routes>
    </Router>
  );
}

export default App;
