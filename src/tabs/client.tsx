import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

interface ClientComponentProps {
    setFilter: Function;
    setOrganic: Function;
}

const ClientComponent: React.FC<ClientComponentProps> = ({setFilter, setOrganic}) => {

    return (
    <Col className="mt-3 ml-3">
        <Row>
            <h3>Informations Personelles</h3>
        </Row>
        <br/>
        <Row>
            <h4>Votre information est requise pour améliorer votre expérience sur <b>ÉpicerieExpress.com</b>.</h4>
        </Row>
        <br/>
        <Row>
            <h5 className="mt-1">Je suis:</h5>
            <Form.Group className="ml-4">
                <Form.Control as="select" onChange={(evt:any) => {setFilter(evt.target.value)}}>
                    <option value="none">Allergique ou intolérant à rien</option>
                    <option value="nutsAllergy">Allergique au noix</option>
                    <option value="lactoseIntolerant">Intolérant au lactose</option>
                </Form.Control>
            </Form.Group>
        </Row>
        <Row>
            <h5 className="mt-1">Je préfère les produits:</h5>
            <Form.Group className="ml-4">
                <Form.Control as="select" onChange={(evt:any) => {setOrganic(evt.target.value)}}>
                    <option value="noPreference">Aucune préférence</option>
                    <option value="yes">Organiques</option>
                    <option value="no">Non-organiques</option>
                </Form.Control>
            </Form.Group>
        </Row>
    </Col>
  );
}

export default ClientComponent;