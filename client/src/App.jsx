// References include:
// https://git.generalassemb.ly/wdi-nyc-lambda/fullstack-crud
// https://git.generalassemb.ly/wdi-nyc-lambda/morning-exercise-guitar-app


import React, { Component } from 'react';
import ListPoems from './components/ListPoems';
// import AddPoem from './components/AddPoem';
// import EditPoem from './components/EditPoem';
import Header from './components/Header';
import { 
  fetchPoems
} from './services/api';
// Styling
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Poesías',
      poems: [],
      title: '',
      content: ''
    }

    // this.selectedPoem = this.selectedPoem.bind(this);
  }

componentDidMount() {
  fetchPoems()
  .then(data => this.setState({ poems: data.poems }));
}

determineWhichToRender() {
  const { currentView } = this.state;
  const { poems } = this.state;

  switch (currentView) {
    case 'Poesías':
      return <ListPoems
        poems={poems}/>
  }
}

  handleLinkClick(link) {
    this.setState({ currentView: link });
  }

  render() {
    const links = [
      'Poesías',
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
