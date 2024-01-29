// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from './components/Main/Main';
 
import Ceo from './routes/Intro/Ceo';
import Outline from './routes/Intro/Outline';
import Ci from './routes/Intro/CI';
import History from './routes/Intro/History';
import Orga from './routes/Intro/Orga';
import OpenInno from './routes/Intro/OpenInno';
import Invest from './routes/Intro/Invest';

import Tech from './routes/Research/Tech';
import Lab from './routes/Research/Lab';

import Notice from './routes/List/Notice';
import Press from './routes/List/Press';
import Event from './routes/List/Event';
import Album from './routes/List/Album';


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

        <Route path="/Research/Tech" element={<Tech />} />
        <Route path="/Research/Lab" element={<Lab />} />



        <Route path="/List/Notice" element={<Notice />} />
        <Route path="/List/Press" element={<Press />} />
        <Route path="/List/Event" element={<Event />} />
        <Route path="/List/Album" element={<Album />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
