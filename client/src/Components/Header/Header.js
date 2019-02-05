import React, { Component } from 'react';

import './Header.css';
import registerSW from '../../registerSW';

const selectedRoute = [
  '/case1', '/case1/child1', '/case1/child2', '/case2', '/case2/child1', 
  '/case2/child2', '/case3', '/case3/child1', '/case3/child2'
];

class Header extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('/express_backend')
    .then(res => res.ok ? res.json() : Promise.reject('we got an error'))
    .then(res => this.setState({ data: res.express }))
    .catch(console.log);
  }
  
  buttonPress(index) {
    const scope = `/${selectedRoute[index].split('/')[1]}`;
    scope !== '/case3' && registerSW(scope);
    this.props.router.history.push(selectedRoute[index]);
  }

  render() {
    return (
      <div className="wrapper">

        <header className="header">
          <h1>Service Worker - POC</h1>
          {/* Render the newly fetched data inside of this.state.data  */}
          <p>{this.state.data}</p>
        </header>
        <div className="App-Button-Container">
          <h3 className="marginLeft2">Case 1: Service Worker #1:</h3>
          
          <input className="App-Button App-Case1" type="button" value="Root Route" onClick={ () => this.buttonPress(0) }>
          </input>

          <input className="App-Button App-Case1" type="button" value="Child Route 1" onClick={ () => this.buttonPress(1) }>
          </input>

          <input className="App-Button App-Case1" type="button" value="Child Route 2" onClick={ () => this.buttonPress(2) }>
          </input> 

        </div>
        <div className="App-Button-Container">
          <h3 className="marginLeft2">Case 2: Service Worker #2:</h3>
          
          <input className="App-Button App-Case2" type="button" value="Root Route" onClick={ () => this.buttonPress(3) }>
          </input>

          <input className="App-Button App-Case2" type="button" value="Child Route 1" onClick={ () => this.buttonPress(4) }>
          </input>

          <input className="App-Button App-Case2" type="button" value="Child Route 2" onClick={ () => this.buttonPress(5) }>
          </input> 

        </div>
        <div className="App-Button-Container">
          <h3 className="marginLeft2">Case 3: No Service Worker #3:</h3>
          
          <input className="App-Button App-Case3" type="button" value="Root Route" onClick={ () => this.buttonPress(6) }>
          </input>

          <input className="App-Button App-Case3" type="button" value="Child Route 1" onClick={ () => this.buttonPress(7) }>
          </input>

          <input className="App-Button App-Case3" type="button" value="Child Route 2" onClick={ () => this.buttonPress(8) }>
          </input> 

        </div>
        {/* <h3>Results:</h3> */}
      </div>
    );
  }
};

export default Header;
