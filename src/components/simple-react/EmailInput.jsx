import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class EmailInput extends React.Component {
    render() {
        return (
            <div>
                <FormGroup controlId="formInlineEmail">
                    <ControlLabel>E-mail: </ControlLabel>
                    <FormControl type="email" placeholder="E-mail" onChange={this.props.emailChange}/>
                </FormGroup>
            </div>
        )
    }
}
export default EmailInput;