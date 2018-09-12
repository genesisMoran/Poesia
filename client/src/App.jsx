// References include:
// https://git.generalassemb.ly/wdi-nyc-lambda/fullstack-crud
// https://git.generalassemb.ly/wdi-nyc-lambda/morning-exercise-guitar-app

import React, { Component } from 'react';
import ListPoems from './components/ListPoems';
import AddPoem from './components/AddPoem';
import EditPoem from './components/EditPoem';
import Header from './components/Header';
import { 
  fetchUsers,
  fetchPoems,
  savePoem,
  updatePoem,
  deletePoem
} from './services/api';
// Styling
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      selectedPoem: '',
      poems: [],
      users: [],
    }
    // this.selectPoem = this.selectPoem.bind(this);   
    this.createPoem = this.createPoem.bind(this);
    this.updatePoem = this.updatePoem.bind(this);
    this.handleEditPoem = this.handleEditPoem.bind(this);
    // this.deletePoem = this.deletePoem.bind(this);   
  }

componentDidMount() {
  fetchUsers()
  .then(data => this.setState({ users: data.users }));

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
        currentView: '',
        poems: data.poems
      });
    });
  }

  handleEditPoem(poem) {
    this.setState({
      selectedPoem: poem,
      currentView: 'Edit Poesía'
    });
  }
  
  determineWhichToRender() {
  const { currentView } = this.state;
  const { poems, selectedPoem } = this.state;

    switch (currentView) {
      case 'Poesías':
        return <ListPoems
          poems={poems}
          handleEditPoem={this.handleEditPoem} />;
          break;
      case 'Share Gems':
        return <AddPoem
          onSubmit={this.createPoem} />;
          break;
      case 'Edit Poesía':
      // const poem = poems.find(poem => poem.poem_id === selectedPoem.poem_id);
        return <EditPoem 
        poem={selectedPoem}
        onSubmit={this.updatePoem} />;
        break;
        default:
        return null;
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
