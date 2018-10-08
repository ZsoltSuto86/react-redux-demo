import React from 'react';
import { Table, Image } from 'react-bootstrap';

class ListOfUsers extends React.Component {

    render() {
        return (
            <div>
                <h2>
                    Users List
                </h2>
                <Table responsive striped bordered condensed>
                    <thead>
                    { this.props.users.users.length === 0 ? null :
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                            <th>Phone</th>
                            <th>Picture</th>
                        </tr>
                    }
                    </thead>
                    <tbody>
                        { this.props.users.users.length === 0 ? null : 
                        this.props.users.users.results.map(user => {
                            return(
                                <tr key={user.email}>
                                <td></td>    
                                <td >{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>{user.email}</td>
                                <td>{user.cell}</td>
                                <td><Image src={user.picture.thumbnail}/></td>
                            </tr>
                            )
                        }                           
                        )} 
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default ListOfUsers;