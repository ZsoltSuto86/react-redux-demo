import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {connect} from 'react-redux';
import Main from './RoutingHandler';
import { withRouter } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LinkContainer to="/list">
          <button>Take me to list</button>
          </LinkContainer>
        </header>
        <Main/>
      </div>
        );
      }
    }
    
    function mapStateToProps(state) {
      //const {isAuthenticated} = state.loginReducer;
      return {
        //isAuthenticated
      }
    }
    
    export default withRouter(connect(mapStateToProps)(App));
