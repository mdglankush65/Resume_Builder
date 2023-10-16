import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import MyResumes from './components/MyResumes';
import About from './components/About';
import NotFound from './NotFound'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './components/subRoutes/Info';
import Education from './components/subRoutes/Education';
import WorkExe from './components/subRoutes/Work_exe';
import Keyskill from './components/subRoutes/Keyskill'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="myresumes" element={ <MyResumes /> } />
        <Route path="about" element={ <About /> } />
        <Route path="experience" element={ <WorkExe /> } />
        <Route path="info" element={<Info />} />
        <Route path="education" element={<Education />} />
        <Route path="keyskills" element={<Keyskill />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
