import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import Missions from './components/Missions';

const App = () => (
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

export default App;
