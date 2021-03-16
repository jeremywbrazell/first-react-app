import React from 'react';
import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;
