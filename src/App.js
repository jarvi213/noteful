import React from 'react';
import MainPage from './MainPage'
import Header from './header/header';
import DUMMYSTORE from './dummyStore.js';
import { Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = DUMMYSTORE;
  }
  
  render() {
    return (
        <main className='App'>
          < Route path='/' component={Header} />
          < MainPage
            folders={this.state.folders}
            notes={this.state.notes}
            />
        </main>
    );
  }
}

export default App;