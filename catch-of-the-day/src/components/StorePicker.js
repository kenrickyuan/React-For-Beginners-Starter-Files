import React from 'react';

class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = (event) => {
    // Stop form from submitting
    event.preventDefault();

    // Get text from input
    console.log(this.myInput);
    // Change page to /store/textinput
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Enter a store</h2>
        <input
        type="text"
        ref={this.myInput}
        required placeholder="Store Name"
        defaultValue ="Fish N Chips"
        />
        <button type="submit">Visit Store -></button>
      </form>
      );
  }
}

export default StorePicker;
