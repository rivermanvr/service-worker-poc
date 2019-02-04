import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';

import Results from '../Results/Results';

class App extends Component {
  state = {
    data: null,
    routes: [
      '/case1', 'case1/child1', '/case1/child2', '/case2', 'case2/child1', '/case2/child2', '/case3', 'case3/child1', '/case3/child2', '/'
    ]
  };

  componentDidMount(props) {
    // Call our fetch function below once the component mounts
    console.log(this.props)
    console.log('didMount called');
    
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
    console.log(this.props)
    console.log('button press', option, button);
  }

  render() {
    return (
      <div>
        <Header />
        <h3>Results:</h3>
        <Results />

      </div>
    );
  }
};

export default App;
