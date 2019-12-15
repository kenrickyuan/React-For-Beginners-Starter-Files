import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // Take a copy of the existing state (to avoid mutation)
    const fishesCopy = { ...this.state.fishes };
    // Add new fish to this fishes copy
    fishesCopy[`fish${Date.now()}`] = fish;
    // Set new fishes object to state
    this.setState({
      fishes: fishesCopy
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Kenrick is cool" />
        </div>
        <Order />
        <Inventory addFish = {this.addFish} loadSampleFishes = {this.loadSampleFishes}/>
      </div>
      );
  }
}

export default App;
