import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class LastNameInput extends React.Component {
    render() {
        return (
            <div>
                <FormGroup controlId="formInlineLastName">
                    <ControlLabel>Last Name: </ControlLabel>
                    <FormControl type="text" placeholder="Last Name" onChange={this.props.lastNameChange}/>
                </FormGroup>
            </div>
        )
    }
}
export default LastNameInput;