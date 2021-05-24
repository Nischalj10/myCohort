import React from "react";
import {Modal, Button, InputGroup, Form} from "react-bootstrap";


const StatusAdd = (props) => {


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
                            <Form.Control value={props.name} onChange={(e) => props.setName(e.target.value)} type="text" placeholder="Status Name" />
                            <br/>
                            <Form.Control value={props.color} onChange={(e) => props.setColor(e.target.value)} type="text" placeholder="Label Color" />
                        </Form.Group>
                    </Form>
                </InputGroup>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.close}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default StatusAdd