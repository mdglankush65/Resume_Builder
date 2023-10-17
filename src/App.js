import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import MyResume from './components/MyResume';
import About from './components/About';
import NotFound from './NotFound'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './components/subRoutes/Info';
import Education from './components/subRoutes/Education';
import Work_exe from './components/subRoutes/Work_exe';
<<<<<<< HEAD
import InvoiceForm from './components/subRoutes/Info';
=======
import Keyskill from './components/subRoutes/Keyskill';
>>>>>>> 9382a77b2db8762d8e985798d391036be8cffc13
function App() {
    return (
        <BrowserRouter>
            <Navbar />
<<<<<<< HEAD
            {/* <Info /> */}
            {/* <Education /> */}
            {/* <Keyskills /> */}
            {/* <Work_exe /> */}
            <InvoiceForm/>
            <Main />
=======
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="myresumes" element={<MyResume />} />
                <Route path="about" element={<About />} />
                <Route path="experience" element={<WorkExe />} />
                <Route path="info" element={<Info />} />
                <Route path="education" element={<Education />} />
                <Route path="keyskills" element={<Keyskill />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
>>>>>>> 9382a77b2db8762d8e985798d391036be8cffc13
            <Footer />
        </BrowserRouter>
    );
}
export default App;
