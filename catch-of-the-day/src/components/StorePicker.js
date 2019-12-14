import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <>
    { /* test comment */}
        <form className="store-selector">
          <h2>This is a H2</h2>
          <input type="text" required placeholder="Store Name"/>
          <button type="submit">Visit Store -></button>
        </form>
      </>
      )
  }
}

export default StorePicker;
