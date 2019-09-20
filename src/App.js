import React from 'react';
import MainPage from './MainPage'
import Header from './header/header';
import { Route } from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <main className='App'>
        < Header />
        < MainPage />
      </main>
    );
  }
}

export default App;