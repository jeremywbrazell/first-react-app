import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import './App.css';
import Data from './beastData.json';
import SelectedBeast from './SelectedBeast.js';
import FormInfo from './forminfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: Data,
      indexofSelectedBeast: -1,
      displayModal: false,
      favoriteBeast: {}
    }
  }

  showModal = (index) => {
    this.setState({ indexofSelectedBeast: index, favoriteBeast: this.state.rawData[index], displayModal: true });
  }

  handleClose = () => {
    this.setState({ displayModal: false});
  }
  render() {
    return (
      <div className="App">
        <header>
          <Header />
          <FormInfo />
          <Main 
            cards={this.state.rawData}
            showModal={this.showModal}
          />
          <SelectedBeast
            show={this.state.displayModal}
            handleClose={this.handleClose}
            favoriteBeast={this.state.favoriteBeast} />
          <Footer />
        </header>
      </div>
    );
  }
}
export default App;

