import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";

import HogContainer from './hogs/HogContainer';

class App extends Component {

  state = {
    hogs: [],
    selectedHog: {},
    filteredHogs: [],
    isFiltered: false
  }

  componentDidMount(){
    this.setState({ hogs: hogs, filteredHogs: hogs })
  }

  handleClickCard = (hog) => {
    const hogObj = this.state.selectedHog.hasOwnProperty('name') ? {} : hog
    this.setState({ selectedHog: hogObj })
  }

  handleFilter = () => {
    if(!this.state.isFiltered){
      const filteredHogs = [...this.state.hogs].filter(hog => hog.greased === true)
      this.setState({ filteredHogs: filteredHogs, isFiltered: true })
    }else{
      this.setState({ filteredHogs: this.state.hogs, isFiltered: false })
    }
  }

  handleSort = (e) => {
    let sortedHogs = []

    if(e.target.name === 'name'){
      sortedHogs = [...this.state.filteredHogs].sort((a, b) => {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }else if(e.target.name === 'weight'){
      sortedHogs = [...this.state.filteredHogs].sort((first, second) => {
        return first.weight - second.weight;
      });
    }
    
    this.setState({ filteredHogs: sortedHogs })
  }

  render() {
    return (
      <div className="App">
        <Nav />

        <button onClick={() => this.handleFilter()}>
          {
              this.state.isFiltered
                ? 'Filter: ON'
                  : 'Filter: OFF'
          }
        </button>

        <button name={'name'} onClick={(e) => this.handleSort(e)}> Sort by Name </button>
        <button name={'weight'} onClick={(e) => this.handleSort(e)}> Sort by Weight </button>

        <HogContainer
          selectedHog={this.state.selectedHog}
            handleClickCard={this.handleClickCard}
              hogs={this.state.filteredHogs} />
      </div>
    );
  }
}

export default App;
