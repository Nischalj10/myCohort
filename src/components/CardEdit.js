import React from "react";
import {Modal, Button, InputGroup, Form} from "react-bootstrap";


const CardEdit = (props) => {


    return(
        <>
            <Modal size="sm"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
                   show={props.show}
                   onHide={props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Status</Modal.Title>
                </Modal.Header>

                <InputGroup style={{justifyContent : 'center', alignItems : 'center'}}>
                    <Form style={{marginTop : 16}}>
                        <Form.Group>
                            <Form.Control value={props.name} onChange={(e) => props.setName(e.target.value)} type="text"/>
                            <br/>
                            <Form.Control value={props.status} onChange={(e) => props.setStaus(e.target.value)} type="text"/>
                        </Form.Group>
                    </Form>
                </InputGroup>

                <Modal.Footer>
                    <Button variant="outline-danger" onClick={props.delete}>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={props.close}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CardEdit