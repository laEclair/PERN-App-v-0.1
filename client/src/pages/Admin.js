import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateTroublescore from "../components/modals/CreateTroublescore";
import CreateService from "../components/modals/CreateService";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [troublescoreVisible, setTroublescoreVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [serviceVisible, setServiceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTroublescoreVisible(true)}
            >
                Добавить сложность
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setServiceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateTroublescore show={troublescoreVisible} onHide={() => setTroublescoreVisible(false)}/>
            <CreateService show={serviceVisible} onHide={() => setServiceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;