import React from 'react';
import Navbar from './components/Navbar';
// import Main from './components/Main';
import Templates from './components/Templates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Main /> */}
      
      <Templates/>
      <Footer />
    </div>
  );
}

export default App;
