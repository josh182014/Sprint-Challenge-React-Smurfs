import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';
import Axios from 'axios';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    Axios 
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  addSmurf = (props) => {
    Axios
    .post(`http://localhost:3333/smurfs`, props)
    .then(res => {
      console.log(res)
      this.setState({ smurfs: res.data })
    })
    .catch(err => {console.log(err)})
  }

  deleteSmurf = (props) => {
    Axios
    .delete(`http://localhost:3333/smurfs/${props}`)
    .then(res => {
      console.log(res)
      this.setState({ smurfs: res.data })
    })
    .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />} />

        <Route path="/smurf-form" render={(props) => <SmurfForm {...props} addSmurf={this.addSmurf} />} />
      </div>
    );
  }
}

export default App;
