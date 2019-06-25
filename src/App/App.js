import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import fbConnection from '../helpers/data/connections';

fbConnection();
class App extends React.Component {
  state = {
    authed: false,
  }

  render() {
    const loadComponent = () => {
      if (this.state.authed) {
        return <Home />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        <header className="App-header">
        {loadComponent()}
       </header>
      </div>
    );
  }
}

export default App;
