import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import ImageLogo from './Styles/LogoMenu.png';

import './Header.css'

const Header=() =>{
    return ( <>
    <div className='linea'><br /> <br /><br /></div>
   
    <Navbar fixed="top" expand="lg" className='fondo' >
    <Container fluid>
        <Navbar.Brand href="#"><Nav.Link to='/' as={Link}><img  className= 'imagenLogo' src={ImageLogo} alt="Lucky Brand" /> </Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1"><Nav.Link to='/' as={Link} id='letra'>Home </Nav.Link></Nav.Link>
            <Nav.Link href="#action3"><Nav.Link to='/menu' as ={Link} id='letra'>Food Menu</Nav.Link></Nav.Link>
            <Nav.Link href="#action2"><Nav.Link to='/reservaciones' as ={Link} id='letra'>Reservaciones</Nav.Link></Nav.Link>
            <Nav.Link href="#action4"><Nav.Link to='/aboutus' as ={Link} id='letra'>About Us</Nav.Link></Nav.Link>
            <Nav.Link href="#action4"><Nav.Link to='/info' as ={Link} id='letra'>Info & contacts</Nav.Link></Nav.Link>
            
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>


</>
    )
};

export default Header;