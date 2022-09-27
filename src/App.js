import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { getRockets } from './redux/Rockets';
import { showMissions } from './redux/Missions';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import Missions from './components/Missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('done');
    dispatch(getRockets());
    dispatch(showMissions());
  }, []);

  return (
    <div id="App">
      <div className=" bg-slate-50 dark:bg-gray-900">
        <HashRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Rockets />} />
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="missions" element={<Missions />} />
          </Routes>
          <Footer />
        </HashRouter>
      </div>
    </div>
  );
};

export default App;
