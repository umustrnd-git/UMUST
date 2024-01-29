// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer'; 
import Ceo from './routes/Intro/Ceo';
import Outline from './routes/Intro/Outline';
import Ci from './routes/Intro/CI';
import History from './routes/Intro/History';
import Orga from './routes/Intro/Orga';
import OpenInno from './routes/Intro/OpenInno';
import Invest from './routes/Intro/Invest';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Intro/Ceo" element={<Ceo />} />
        <Route path="/Intro/Outline" element={<Outline />} />
        <Route path="/Intro/Ci" element={<Ci />} />
        <Route path="/Intro/Orga" element={<Orga />} />
        <Route path="/Intro/History" element={<History />} />
        <Route path="/Intro/OpenInno" element={<OpenInno />} />
        <Route path="/Intro/Invest" element={<Invest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
