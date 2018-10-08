import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class PhoneInput extends React.Component {
    render() {
        return (
            <div>
                <FormGroup controlId="formInlinePhone">
                    <ControlLabel>Phone Number: </ControlLabel>
                    <FormControl type="text" placeholder="Phone Number" onChange={this.props.phoneChange}/>
                </FormGroup>
            </div>
        )
    }
}
export default PhoneInput;