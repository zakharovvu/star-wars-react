import React, { Component } from 'react';

import './App.css';

const Menu = () => <h1>Menu</h1>;
const Content = () => <h1>Content</h1>;

class App extends Component {
  render() {
    return (
      <div >
        <Menu />
        <Content />
      </div>
    );
  }
}

export default App;
