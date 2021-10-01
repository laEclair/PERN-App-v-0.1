import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import  {Button}  from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { createTroublescore, createType } from '../../http/serviceAPI';

const CreateTroublescore = ({show, onHide}) => {

  const [value, setValue] = useState('')

    const addTroublescore = () => {
        createTroublescore({name: value}).then(data => {
          setValue('')
          onHide()
        })
    }

    return (
        <Modal
        show={show}
        onHide={onHide}
        
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить сложность
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
           value = {value}
           onChange = {e => setValue(e.target.value)}
            placeholder={"Введите название типа"}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={addTroublescore}>Добавить</Button>
        </Modal.Footer>
      </Modal>
       
    );
};

export default CreateTroublescore;