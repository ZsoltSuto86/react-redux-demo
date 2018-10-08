import React from 'react';
import { Form, Row, Col, FormControl, FormGroup } from 'react-bootstrap';

export const ResultComponent = (props) => {
        return(
            <div>
                <Form>
                    <Row>
                    <Col md={6}>
                    <FormGroup>
                    <FormControl.Static>{props.user.firstName}</FormControl.Static>
                    </FormGroup>
                    <FormGroup>
                    <FormControl.Static>{props.user.lastName}</FormControl.Static>
                    </FormGroup>
                    <FormGroup>
                    <FormControl.Static>{props.user.email}</FormControl.Static>
                    </FormGroup>
                    <FormGroup>
                    <FormControl.Static>{props.user.phone}</FormControl.Static>
                    </FormGroup>                
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                    <FormControl.Static><img src={props.user.previewImgUrl} with="100px" height="100px" alt="pic" /></FormControl.Static> 
                    </FormGroup>
                    </Col>
                    </Row>
                </Form>
                </div>
        )
    } 
