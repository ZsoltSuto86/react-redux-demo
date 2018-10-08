import React from 'react';
import { Panel, Form, Row, Col, Button } from 'react-bootstrap';
import FirstNameInput from './FirstNameInput';
import LastNameInput from './LastNameInput';
import EmailInput from './EmailInput';
import PhoneInput from './PhoneInput';
import { ResultComponent } from './ResultComponent';

class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      showResult: true,
      previewImgUrl: undefined

    };
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  firstNameChange = (e) => {
    e.preventDefault();
    this.setState({ firstName: e.target.value })
  }

  lastNameChange = (e) => {
    e.preventDefault();
    this.setState({ lastName: e.target.value })
  }

  emailChange = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value })
  }

  phoneChange = (e) => {
    e.preventDefault();
    this.setState({ phone: e.target.value })
  }

  showResults = (e) => {
    e.preventDefault();
    this.setState({ showResult: false })
  }

  fileChangedHandler = (e) => {
    const file = e.target.files[0]
    if (!file) {
      return
    }
    this.generatePreviewImgUrl(file, previewImgUrl => {
      this.setState({ previewImgUrl })
    })
  }

  generatePreviewImgUrl(file, callback) {
    const reader = new FileReader()
    const url = reader.readAsDataURL(file)
    reader.onloadend = e => callback(reader.result)
  }


  render() {
    return (
      <div>
        {this.state.showResult ?
          <Panel>
            <Panel.Heading>UserForm</Panel.Heading>
            <Panel.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <FirstNameInput firstNameChange={this.firstNameChange} />
                    <LastNameInput lastNameChange={this.lastNameChange} />
                    <EmailInput emailChange={this.emailChange} />
                    <PhoneInput phoneChange={this.phoneChange} />
                  </Col>
                  <Col md={6}>
                    <input type="file" onChange={this.fileChangedHandler} />
                  </Col>
                </Row>
                <Button bsStyle="info" bsSize="large" onClick={this.showResults}>Save</Button>
              </Form>
            </Panel.Body>
          </Panel>
          :       
          <ResultComponent user={this.state} />
      }
      </div>
    )
  }
}

export default UserForm;