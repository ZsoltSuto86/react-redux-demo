<<<<<<< HEAD
import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {connect} from 'react-redux';
import Main from './RoutingHandler';
import { withRouter } from 'react-router';
import logo from './logo.svg';
=======
import React, { Component }from 'react';
>>>>>>> e751c6534926e65dfd90d2e49130bbdc7c60c45c
import './App.css';
import Users from './components/simple-react/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header">
          <LinkContainer to="/list">
          <button>Take me to list</button>
          </LinkContainer>
        </header>
        <Main/>
=======
        <Users />
>>>>>>> e751c6534926e65dfd90d2e49130bbdc7c60c45c
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
