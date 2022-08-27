import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import "./List.css"

const List =({reservaciones,editarReservacion, deletReservacion})=>{const onClicked1 =(id)=>{
            const updateReservacion = {
                name: prompt ("Nombre de la persona que reserva"),
                hour: prompt ("Hour"),
            }
            editarReservacion(id, updateReservacion);}

            const onClicked2 =(id)=>{
                deletReservacion(id, deletReservacion);}
      

    return reservaciones.map((reservacion, key) => { 
        
        return (<><div id='res'><br />
        <ListGroup.Item id='nombreres' as="il" key={key}>{reservacion.name}</ListGroup.Item>
        <ListGroup.Item as="il" key={key}>{reservacion.hour} </ListGroup.Item >
<br />
        <Button id='boton' onClick={()=>onClicked1(reservacion.id)}>Edit</Button>
        <Button id='boton2' onClick={()=>onClicked2(reservacion.id)}>Delet</Button>
        <br /><br />
        </div>
        </>)
    })}

    export default List;