import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  
  buttonPress(option, button) {
    console.log('button press', option, button);
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Service Worker - POC</h1>
      </header>
      {/* Render the newly fetched data inside of this.state.data  */}
      <p>{this.state.data}</p>
      <div className="App-Button-Container App-paddingBelow">
        <h3>Case 1: Service Worker #1:</h3>
        <input className="App-Button" type="button" value="Root Route" onClick={ () => this.buttonPress(1, 1) }></input>
        <input className="App-Button" type="button" value="Child Route 1" onClick={ () => this.buttonPress(1, 2) }></input>
        <input className="App-Button" type="button" value="Child Route 2" onClick={ () => this.buttonPress(1, 3) }></input>
      </div>
      <div className="App-Button-Container App-paddingBelow">
        <h3>Case 2: Service Worker #2:</h3>
        <input className="App-Button" type="button" value="Root Route" onClick={ () => this.buttonPress(2, 1) }></input>
        <input className="App-Button" type="button" value="Child Route 1" onClick={ () => this.buttonPress(2, 2) }></input>
        <input className="App-Button" type="button" value="Child Route 2" onClick={ () => this.buttonPress(2, 3) }></input>
      </div>
      <div className="App-Button-Container App-paddingBelow">
        <h3>Case 3: No Service Worker:</h3>
        <input className="App-Button" type="button" value="Root Route" onClick={ () => this.buttonPress(3, 1) }></input>
        <input className="App-Button" type="button" value="Child Route 1" onClick={ () => this.buttonPress(3, 2) }></input>
        <input className="App-Button" type="button" value="Child Route 2" onClick={ () => this.buttonPress(3, 3) }></input>
      </div>
      <div className="App-marginBelow">
        <h3>Results</h3>
      </div>
    </div>
  );
}
}

export default App;