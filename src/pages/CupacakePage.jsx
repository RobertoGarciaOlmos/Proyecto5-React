import React, { useEffect, useContext  } from "react";
import { CupcakeContext } from "../context/CupcakeContext";
import { verCupcakes } from "../services";
import './CupcakePage.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';




const CupcakePage = ()=> {
    const{cupcakes, guardarCupcakes} = useContext(CupcakeContext);

    const getCupcakes= async() =>{
    const {detalles}  = await verCupcakes();
    guardarCupcakes (detalles);
}

useEffect(()=>{
    getCupcakes();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);


return (

  
  
  <div className="d-flex flex row" style={{with:"30%", margin: "10px", borderTop: "10px"}} >
    <br />
    <h1 className='tituloMenu2'>Desayunos y Paquetes de la semana</h1>
    <br />
    <br /><br />
  {cupcakes.map((cupcake,index)=>(

    <Col sm={3}>
<Card style={{margin:"10px"}} key={index}>
      <Card.Img variant="Caramelo" src={cupcake.costo} />
      <Card.Body>
        <Card.Title className="letraMenu1">{cupcake.nombre}</Card.Title>
        <Card.Text className="letraMenu1">
        Caramel Cupcake
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id="letraMenu1">Costo por pz </ListGroup.Item>
        <ListGroup.Item id="letraMenu1">{cupcake.costo} </ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>


  ))}  
    </div>

);
  }

export default CupcakePage;