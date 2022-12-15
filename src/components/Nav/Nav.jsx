import { useContext } from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import ImageLogo from './Styles/LogoMenu.png';
import './Nav.css'
import { UserContext } from '../../context/UserContext';


const NavCup=() =>{
const {user:
    {token},} = useContext(UserContext);

    const publicRoutes =[
    <Nav.Link href="#action6"><Nav.Link to='/login' as ={Link} key= {1} id='letra'>Login</Nav.Link></Nav.Link>,
    <Nav.Link href="#action7"><Nav.Link to='/registro' as ={Link} key= {2}id='letra'>Registration</Nav.Link></Nav.Link>
    ]
    
    const privRoutes =[
        <Nav.Link href="#action1"><Nav.Link to='/about' as ={Link} key= {1} id='letra'>About Us</Nav.Link></Nav.Link>,
        <Nav.Link href="#action2"><Nav.Link to='/cupcakes' as ={Link} key= {2} id='letra'>Menu</Nav.Link></Nav.Link>,
        <Nav.Link href="#action3"><Nav.Link to='/menu' as ={Link} key= {3} id='letra'>Coffee break</Nav.Link></Nav.Link>,
        <Nav.Link href="#action4"><Nav.Link to='/reservaciones' as ={Link} key= {3} id='letra'>Reservation</Nav.Link></Nav.Link>,
        <Nav.Link href="#action5"><Nav.Link to='/info' as ={Link} key= {4} id='letra'>Contact</Nav.Link></Nav.Link>,
        <Nav>
            <Nav.Link href="#action6"><Nav.Link to='/profile' as ={Link} key= {5} id='letra'>Profile User</Nav.Link></Nav.Link>,
            <Nav.Link href="#action7"><Nav.Link to='/Logout' as ={Link} key= {6} id='letra'>Logout</Nav.Link></Nav.Link>
                </Nav>
        ]
    
    return ( <>
    <div className='linea'><br /> <br /><br /></div>
       <Navbar fixed="top" expand="lg" className='fondo' >
    <Container fluid>
        <Navbar.Brand href="#"><Nav.Link to='/' as={Link}><img  className= 'imagenLogo' src={ImageLogo} alt="Lucky Brand" /> </Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1"><Nav.Link to='/' as={Link} id='letra'>Home </Nav.Link></Nav.Link>{token ? privRoutes: null}
        </Nav>
        <Nav>
        {token ? null: publicRoutes}
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

<br /><br />
</>
    )
};

export default NavCup;