import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCup1 from './Styles/Cupcake/Caramelocup.png';
import ImageCup2 from './Styles/Cupcake/chocolateCup.png';
import ImageCup3 from './Styles/Cupcake/tequilaCup.png';
import ImageCup4 from './Styles/Cupcake/vainillacup.png';
import ImageCoff1 from './Styles/Coffee/americano.png';
import ImageCoff2 from './Styles/Coffee/capuchino.png';
import ImageCoff3 from './Styles/Coffee/espreso.png';
import ImageCoff4 from './Styles/Coffee/macchiato.png';
import ImageHotDrink1 from './Styles/Hot Drinks/chocolate.png';
import ImageHotDrink2 from './Styles/Hot Drinks/chocolateWhite.png';
import ImageHotDrink3 from './Styles/Hot Drinks/vainillaTea.png';
import ImageHotDrink4 from './Styles/Hot Drinks/vainillaVerde.png';
import './Menu.css'


const Menu =()=>
{ return(
<>
<div className='color'> <br />
<Container >
<br />
<h1 className='tituloMenu'>MENU</h1>

<br /><br />
<Row className='titulo2Menu'> Cupcake </Row>
<br />
<Row>

<Col sm={3}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="Caramelo" src={ImageCup1} />
      <Card.Body>
        <Card.Title className="letraMenu">Caramel Cupcake</Card.Title>
        <Card.Text className="letraMenu">
        Caramel Cupcake
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id="letraMenu">1pza - $14 pesos </ListGroup.Item>
        <ListGroup.Item id="letraMenu">12 pza - $140 pesos </ListGroup.Item>
      
      </ListGroup>
    </Card>
    </Col>

    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImageCup4} />
      <Card.Body>
        <Card.Title className="letraMenu">Vanilla Cupcake</Card.Title>
        <Card.Text className="letraMenu">
        Vanilla Cupcake
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id="letraMenu">1pza - $12 pesos</ListGroup.Item>
        <ListGroup.Item id="letraMenu">12 pza - $120 pesos</ListGroup.Item>
      
      </ListGroup>
    </Card>
    </Col>

    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImageCup2} />
      <Card.Body>
        <Card.Title className="letraMenu">Chocolate Cupcake</Card.Title>
        <Card.Text className="letraMenu">
        Chocolate Cupcake
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id="letraMenu">1pza - $12 pesos</ListGroup.Item>
        <ListGroup.Item id="letraMenu">12 pza - $120 pesos</ListGroup.Item>
        
      </ListGroup>
    </Card>
    </Col>

    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImageCup3} />
      <Card.Body>
        <Card.Title className="letraMenu">Mexican Cupcake</Card.Title>
        <Card.Text className="letraMenu">
        Mexican Cupcake
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id="letraMenu">1pza - $14 pesos</ListGroup.Item>
        <ListGroup.Item id="letraMenu">12 pza - $140 pesos</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>

    </Row>

<br /><br /><br />

    <Row className='titulo2Menu'> Coffee </Row>
    <br />
<Row>

<Col sm={3}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="Americano" src={ImageCoff1} />
      <Card.Body>
        <Card.Title className='letraMenu'>Americano</Card.Title>
        <Card.Text className='letraMenu'>
        Americano
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id='letraMenu'>$30 - Short</ListGroup.Item>
        <ListGroup.Item id='letraMenu'>$40 - Venti</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>

    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="Cappuccino" src={ImageCoff2} />
      <Card.Body>
        <Card.Title className='letraMenu'>Cappuccino</Card.Title>
        <Card.Text className='letraMenu'>Cappuccino
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id='letraMenu'>$45 - Short</ListGroup.Item>
        <ListGroup.Item id='letraMenu'>$55 - Venti</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>

    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="Macchiato" src={ImageCoff4} />
      <Card.Body>
        <Card.Title className='letraMenu'>Macchiato</Card.Title>
        <Card.Text className='letraMenu'>Macchiato</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id='letraMenu'>$50 - Short</ListGroup.Item>
        <ListGroup.Item id='letraMenu'>$60 - Venti</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>

    <Col sm={3}>
    <Card style={{ width: '18rem' }} className='letraMenu'>
      <Card.Img variant="Espresso" src={ImageCoff3} />
      <Card.Body className='letraMenu'>
        <Card.Title >Espresso</Card.Title>
        <Card.Text>
        Espresso
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id='letraMenu'>$20 - 1.5 oz</ListGroup.Item>
        <ListGroup.Item id='letraMenu'>-</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>

    </Row>

    <br /><br /><br />

    <Row className='titulo2Menu'> Hot Drinks </Row>
    <br />
<Row>

<Col sm={3}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="Hot Chocolate" src={ImageHotDrink1} />
      <Card.Body>
        <Card.Title className='letraMenu'>Hot Chocolate</Card.Title>
        <Card.Text className='letraMenu'>
        Hot Chocolate
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id='letraMenu'>$45 - Short</ListGroup.Item>
        <ListGroup.Item id='letraMenu'>$55 - Venti</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>

    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="White Chocolate" src={ImageHotDrink2} />
      <Card.Body>
        <Card.Title className='letraMenu'>White Chocolate</Card.Title>
        <Card.Text className='letraMenu'>
        White Chocolate
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id='letraMenu'>$50 - Short</ListGroup.Item>
        <ListGroup.Item id='letraMenu'>$60 - Venti</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>

    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="Vanilla tea" src={ImageHotDrink3} />
      <Card.Body>
        <Card.Title className='letraMenu'>Vanilla tea</Card.Title>
        <Card.Text className='letraMenu'>
        Vanilla tea
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id='letraMenu'>$30 - Short</ListGroup.Item>
        <ListGroup.Item id='letraMenu'>$40 - Venti</ListGroup.Item>

      </ListGroup>
    </Card>
    </Col>

    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="Green tea" src={ImageHotDrink4} />
      <Card.Body>
        <Card.Title className='letraMenu'>Green tea</Card.Title>
        <Card.Text className='letraMenu'>
        Green tea
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id='letraMenu'>$30 - Short</ListGroup.Item>
        <ListGroup.Item id='letraMenu'>$40 - Venti</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>

    </Row>
    <br /><br /><br />
    </Container>
    </div>

</>
)
}

export default Menu;