import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Auth />
          <Home />
      </header>
    </div>
  );
}

export default App;
