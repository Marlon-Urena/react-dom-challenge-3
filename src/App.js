import React, { Component } from 'react';
import Table from './components/Table'
import NavControl from './components/NavControl'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() { return(
    <>
    <NavControl></NavControl>
    <div className="App">
    <Table></Table>
    </div>
    </>
  );
  }
}

export default App;
