import Carousel from 'react-bootstrap/Carousel';
import ImageCafe1 from './Styles/Cafe 1.png';
import ImageCafe2 from './Styles/Cafe 2.png';
import ImageCafe3 from './Styles/Cafe 3.png';
import ImageCafe4 from './Styles/Cafe 4.png';
import './Carrusel.css'

const Carrusel=()=> {
    return ( 
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageCafe1}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3 id='frases'>"Yo orquesto mis mañanas al son del café".</h3>
          <p id='frases'>Harry Mahtar</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageCafe2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 id='frases'>"La amistad es como el café, una vez frío nunca vuelve a su sabor original, aún si es recalentado".</h3>
          <p id='frases'>Kant</p>
        </Carousel.Caption>


      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageCafe3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 id='frases'>"La vida es como una taza de café. Todo está en cómo la preparas, pero sobre todo en cómo la tomas".</h3>
          <p id='frases'>Anónimo</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageCafe4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 id='frases'>"El café huele a cielo recién molido".</h3>
          <p id='frases'>
          Jessi Lane Adams
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
  );
}

export default Carrusel;