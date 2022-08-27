import {Button, Form} from 'react-bootstrap';
import "./Form.css"

const FormComponent =({agregarReservacion})=>{


    const onSubmited= (event)=>{
        event.preventDefault();
        const formData=  new FormData (event.target);
        const reservacion=Object.fromEntries(formData);
        agregarReservacion(reservacion);
    }


    return(
    <Form onSubmit={onSubmited} >      
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id='nombreForm'>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" name="name"
        /> 
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label id='nombreForm'>Hora</Form.Label>
        <Form.Control  type="time"  min="11:00" max="21:00"  placeholder="Hora" name="hour"/> Open: 11:00 am - 21:00 pm
        </Form.Group>
        
        <Button  type="submit" id='botonForm'>
        Submit
        </Button>
    </Form>
    );
}


export default FormComponent;