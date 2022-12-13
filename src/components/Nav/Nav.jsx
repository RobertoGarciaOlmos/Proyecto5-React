import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import ImageLogo from './Styles/LogoMenu.png';

import './Nav.css'

const NavCup=() =>{
    return ( <>
    <div className='linea'><br /> <br /><br /></div>
   
    <Navbar fixed="top" expand="lg" className='fondo' >
    <Container fluid>
        <Navbar.Brand href="#"><Nav.Link to='/' as={Link}><img  className= 'imagenLogo' src={ImageLogo} alt="Lucky Brand" /> </Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1"><Nav.Link to='/' as={Link} id='letra'>Home </Nav.Link></Nav.Link>
            <Nav.Link href="#action3"><Nav.Link to='/about' as ={Link} id='letra'>About Us</Nav.Link></Nav.Link>
            <Nav.Link href="#action2"><Nav.Link to='/cupcakes' as ={Link} id='letra'>Cupcakes</Nav.Link></Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href="#action4"><Nav.Link to='/login' as ={Link} id='letra'>Login</Nav.Link></Nav.Link>
        <Nav.Link href="#action4"><Nav.Link to='/registro' as ={Link} id='letra'>Registration</Nav.Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

<br /><br />
</>
    )
};

export default NavCup;