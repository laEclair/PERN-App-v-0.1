import React, { useContext, useEffect } from 'react';
import {  Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from '../components/TypeBar';
import TroublescoreBar from '../components/TroublescoreBar';
import ServiceList from '../components/ServiceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchTroublescores, fetchTypes, fetchServices } from '../http/serviceAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {

  const {service} = useContext(Context)
// рендер типов и сложности
  useEffect(() =>{
    fetchTypes().then(data => service.setTypes(data))
    fetchTroublescores().then(data => service.setTroublescores(data))
    fetchServices(null, null, 3, 2).then(data => {
      service.setServices(data.rows)
      service.setTotalCount(data.count)
    })
  }, [])

  // 


  useEffect(() => {
    fetchServices(service.selectedType.id, service.selectedTroublescore.id, service.page, 8).then(data => {
      service.setServices(data.rows)
      service.setTotalCount(data.count)
    })

  }, [service.page, service.selectedType, service.selectedTroublescore])


  return (
    
      <Container>
        <Row className = "mt-2">
          <Col md ={3}>
              <TypeBar/>
          </Col>
          <Col md ={9}>
              <TroublescoreBar/>
              <ServiceList/>
              <Pages/>
          </Col>
        </Row>
      </Container>
    
  );
});

export default Shop;
