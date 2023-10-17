import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Info from './components/subRoutes/Info';
import Education from './components/subRoutes/Education';
import Work_exe from './components/subRoutes/Work_exe';
import InvoiceForm from './components/subRoutes/Info';
function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <Info /> */}
            {/* <Education /> */}
            {/* <Keyskills /> */}
            {/* <Work_exe /> */}
            <InvoiceForm/>
            <Main />
            <Footer />
        </div>
    );
}

export default App;
