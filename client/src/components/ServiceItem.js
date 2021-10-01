import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from 'react-router';
import { SERVICE_ROUTE } from '../utils/consts';




const ServiceItem = ({service}) => {
    const history = useHistory()
   
    return (
        <Col md={3} className={"mt-3 pl-1"} onClick={() => history.push(SERVICE_ROUTE + '/' + service.id)}>
            <Card style ={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + service.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Требуется консультация</div>
                </div>
                <div>{service.name}</div>
            </Card>
        </Col>
    );
};

export default ServiceItem;