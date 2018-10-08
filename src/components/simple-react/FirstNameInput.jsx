import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class FirstNameInput extends React.Component {
    render() {
        return (
            <div>
                <FormGroup controlId="formInlineName">
                    <ControlLabel>First Name: </ControlLabel>
                    <FormControl type="text" placeholder="First Name" onChange={this.props.firstNameChange}/>
                </FormGroup>
            </div>
        )
    }
}
export default FirstNameInput;