import React, { Component } from 'react';
import ListPoems from './components/ListPoems';
import { fetchPoems, fetchUsers } from './services/api';
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <ListPoems />
      </React.Fragment>
    )
  }
}

export default App;
