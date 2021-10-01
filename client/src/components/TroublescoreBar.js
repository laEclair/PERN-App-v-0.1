import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index"
import Row from "react-bootstrap/Row";
import { Card } from 'react-bootstrap';


const TroublescoreBar = observer(() => {
    const {service} = useContext(Context)
    return (

        <Row className="d-flex ">
            {service.troublescores.map(troublescore =>
                <Card
                    style={{cursor:'pointer'}}
                    key={troublescore.id}
                    className="pr-3 pt-2 pl-3 pb-2 mb-1"
                    onClick = {() => service.setSelectedTroublescore(troublescore)}
                    border={troublescore.id === service.selectedTroublescore.id ? 'danger' : 'lightgray mr-1 '}
                >
                        {troublescore.name}
                </Card>
                )}

        </Row>
    );
});

export default TroublescoreBar