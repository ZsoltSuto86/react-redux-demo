import React from 'react';
import { Button } from 'react-bootstrap';
import ListOfUsers from './ListOfUsers';
import UsersForm from './UserForm';


class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          users: []
        };
        this.getrandomUsers = this.getrandomUsers.bind(this);
      }

      getrandomUsers() {
        fetch('https://randomuser.me/api/?results=10')
          .then(response => response.json())
          .then(data => this.setState({ users: data}));
      } 

    render(){
        return(
            <div>
            <p>Random Users</p>
            <Button bsStyle="danger" bsSize="large" onClick={this.getrandomUsers}>Get Users</Button>
            <ListOfUsers users={this.state}/>
            <UsersForm />
            </div>
        )
    }
}

export default Users;