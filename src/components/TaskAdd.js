import React from "react";
import {Modal, Button, InputGroup, Form} from "react-bootstrap";


const TaskAdd = (props) => {


    return(
        <>
        <Modal size="sm"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               show={props.show}
               onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>Add a task</Modal.Title>
            </Modal.Header>

            <InputGroup style={{justifyContent : 'center', alignItems : 'center'}}>
                <Form style={{marginTop : 16}}>
                <Form.Group>
                    <Form.Control autoFocus value={props.name} onChange={(e) => props.setName(e.target.value)} type="text" placeholder="Task Name" />
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

export default TaskAdd