import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import Image from './Styles/LuckyBrand.png';
import Navbar from 'react-bootstrap/Navbar';




import Nav from 'react-bootstrap/Nav';

import {Link} from 'react-router-dom'

const Footer =() => {
    return  (<>  
<br /> <br /> 
    <div  className='ribbon'>  
    <br /> 
    
    <Container fluid="md">
      <Row>
        <Col sm={1}>
        <img  className= 'imagenLB' src={Image} alt="Lucky Brand" />
        </Col>
        <Col sm={2}></Col>
        <Col sm={9}> 
        <br /> 
        <div>Nota:Esta pagina fue realizada con propositos estudiantiles. El contenido es unica y esclusivamente para la presentacion de un proyecto Bootcamps.
      </div>
      <br /> 
      <div >Venustiano Carranza #208,0 Temoaya, Temoaya, Edo de México 50850 Temoaya, Estado de México, México.
      </div>
      <div>E-mail: roberto.garcia.olmos@gmail.com Tel: 722 501 6915 </div>
      </Col>

        </Row>
        <br /> 
      </Container>
            </div>
      
            <div className='fin'>

            

    </div>
    <div className='fin'>
    <Navbar>
   
    <Col sm={4}><Nav.Link href="#"><Nav.Link to='/' as={Link}>Home </Nav.Link></Nav.Link></Col>
    <Col sm={4}><Nav.Link href="#action4"><Nav.Link to='/about' as ={Link}>About Us</Nav.Link></Nav.Link></Col>
    <Col sm={4}><Nav.Link href="#action2"><Nav.Link to='/cupcakes' as ={Link}>Cupcakes</Nav.Link></Nav.Link></Col>
    <Col sm={4}><Nav.Link href="#action2"><Nav.Link to='/inf' as ={Link}>Contact</Nav.Link></Nav.Link></Col>


</Navbar>

    </div>
    
  </>)
};

export default Footer;
