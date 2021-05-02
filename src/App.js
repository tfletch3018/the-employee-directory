import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';
import './components/style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;