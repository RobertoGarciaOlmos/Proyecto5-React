import ImageIns from './Style/Insta.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Info.css'

const Info =()=>
{
    return (
<><br /><br />
        <h1 className='tituloInfo'>CONTACTO</h1>
        <br /><br />
    
    <Row >
    <Col ms={6} className='imagenInfo'><img src={ImageIns} alt="Instagram" /></Col>
    <Col ms={3} className='letraInfo'>
        <Container> 
            <br />
            <Row>
        Atención a clientes:
        </Row>
        <Row>55654*342 ext. 2011</Row>
        <Row>55654*342 ext. 2012</Row>
        <Row>55654*342 ext. 2013</Row>
        <Row>55654*342 ext. 2014</Row>

        <br /><br />
        <Row> contato**@LuckyBrand.mx
        </Row>
        </Container>
            </Col>
    <Col ms={3} className='letraInfo'>
        <Container>
        <br />
        <Row>Tienda en línea:
        </Row>
        <Row>
        5562+0500 ext 910  
        </Row>
        
        <Row>5562+0500 ext 911
        </Row>
        <Row>5562+0500 ext 912
        </Row>
        <Row>5562+0500 ext 913
        </Row>

        <br /><br />
        <Row> contato**@LuckyBrand.mx
        </Row>
        </Container>
        
    </Col>
        
    </Row>
    <br /><br />
</>
    )
}

export default Info;