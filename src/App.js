import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Experience from './components/subRoutes/Experience';
// import resume from './resources/Word-template-1.jpg'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Experience/>
      <Footer/>
      {/* <img src="./resources/Word-template-1.jpg" alt="" /> */}
    </div>
  );
}

export default App;
