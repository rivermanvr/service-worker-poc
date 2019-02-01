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

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Service Worker - POC</h1>
      </header>
      {/* Render the newly fetched data inside of this.state.data  */}
      <p>{this.state.data}</p>
      <div className="App-Button-Container App-paddingBelow">
        <h3>Select the case you wish to run</h3>
        <div>
          <input className="App-Button App-SpacingRight" type="button" value="Case 1"></input>
          <input className="App-Button App-SpacingRight" type="button" value="Case 2"></input>
          <input className="App-Button" type="button" value="Case 3"></input>
        </div>
      </div>
    </div>
  );
}
}

export default App;