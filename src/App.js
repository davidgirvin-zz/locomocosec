import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer'
class App extends Component{
  render() {
    return (
      <div className="App">
        <Toolbar />
        <SideDrawer />
        <main style={{marginTop: '64px'}}>
          <p>You know stuff and stuff</p>
        </main>
      </div>
    );
  }
}




export default App;
