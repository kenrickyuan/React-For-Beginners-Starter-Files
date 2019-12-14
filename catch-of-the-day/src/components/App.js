import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Kenrick is cool" />
        </div>
        <Order />
        <Inventory addFish = {this.addFish} />
      </div>
      );
  }
}

export default App;
