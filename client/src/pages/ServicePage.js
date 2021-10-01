import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import { fetchOneService } from '../http/serviceAPI';


const ServicePage = () => {
  const [service, setService] = useState({info: []})
  const {id} = useParams()
    fetchOneService(id).then(data => setService(data))
  useEffect( () => {

  }, [])

  return (
    
     <Container className="mt-3">
       <Row >
        <Col md={4}>
            <Image width={300} height={300} src={process.env.REACT_APP_API_URL + service.img}/>
        </Col>
        
        <Col md={4} className="">
            <Row className="d-flex flex-column align-items-center mt-2">
                <h2 
                style={{fontSize: 28}}
                className="ml-3 mb-5 ">{service.name}</h2>
            </Row>      
          <Card 
            className="d-flex flex-column  justify-content-around mt-5 p-2"
            style={{width: 300, height: 100, fontSize: 32, border: '1px solid black'}}
          >
              <h3 >От: {service.price} р/месяц.</h3>
              <Button className="mt-2 pr-2" variant={"outline-dark"}>
                Добавить услугу
              </Button>
          </Card>
        </Col>
        <Col md={4} className="">
            <Row className="d-flex flex-column align-items-center mt-2">
                <h2 
                style={{fontSize: 28}}
                className="ml-3 mb-5 ">Консультация</h2>
            </Row>      
         
        </Col>
        
       </Row>
       <Row className="d-flex flex-column mt-3 mb-3 ml-3  ">
         <h1 className="mb-3 ml-n3  ">Общая информация</h1>
         {service.info.map((info, index) =>
            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
                {info.title}: {info.description}
            </Row>
          )}
       </Row>
        


     </Container>
  );
};

export default ServicePage;
