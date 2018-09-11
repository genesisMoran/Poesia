// References include:
// https://git.generalassemb.ly/wdi-nyc-lambda/fullstack-crud
// https://git.generalassemb.ly/wdi-nyc-lambda/morning-exercise-guitar-app

import React, { Component } from 'react';
import ListPoems from './components/ListPoems';
import AddPoem from './components/AddPoem';
import EditPoem from './components/EditPoem';
import Header from './components/Header';
import { 
  fetchPoems,
  savePoem,
  updatePoem
} from './services/api';
// Styling
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      poems: []
    }

    // this.selectPoem = this.selectPoem.bind(this);
    this.createPoem = this.createPoem.bind(this);
  }

componentDidMount() {
  fetchPoems()
  .then(data => this.setState({ poems: data.poems }));
}
  createPoem(poem) {
    savePoem (poem)
    .then(data => fetchPoems())
    .then(data => {
      this.setState({
        poems: data.poems
      });
    });
  }

  updatePoem(poem) {
    updatePoem(poem)
      .then(data => fetchPoems())
      .then(data => {
        this.setState({
          currentView: 'Poesías',
          poems: data.poems
        });
      })
  }
  
  determineWhichToRender() {
  const { currentView } = this.state;
  const { poems } = this.state;

  switch (currentView) {
    case 'Poesías':
      return <ListPoems
        poems={poems}/>;
        break;
    case 'Share Gems':
      return <AddPoem
        onSubmit={this.createPoem} />;
  }
}

  handleLinkClick(link) {
    this.setState({ currentView: link });
  }

  render() {
    const links = [
      'Poesías',
      'Share Gems',
      'Edit Poesía'
    ];

    return(
      <div className="App">
        <Header
          onClick={this.handleLinkClick.bind(this)}
          links={links} />
          {this.determineWhichToRender()}
      </div>
    )
  }
}

export default App;
