import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import './App.css';
import Data from './beastData.json';
import SelectedBeast from './SelectedBeast.js';
import Dropdown from './forminfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: Data,
      filteredData: Data,
      // indexofSelectedBeast: -1,
      displayModal: false,
      favoriteBeast: {}
    };
  }

  showModal = (index) => {
    this.setState({ indexofSelectedBeast: this.state.rawData[index], displayModal: true });
  }

  handleInput = (e) => {this.setState({ filteredData: this.state.rawData.filter(value => {
    if (e === 'all') {
      return value;
    } else {
      return value.horns === Number(e);}
    })
    });
  };

  render() {
    return (
      <>
          <Header />
          <Dropdown
          handleInput={this.handleInput}
          ></Dropdown>
          <Main 
            showModal={this.showModal}
            cards={(this.state.filteredData) !== null ? (this.state.filteredData) : (this.state.rawData)} 
          />
          <SelectedBeast
            show={this.state.displayModal}
            handleClose={() => this.setState({displayModal:false})}
            favoriteBeast={this.state.favoriteBeast} 
            this={this.state.title}
            />
          <Footer />
      </>
    );
  }
}
export default App;

