import Container from 'react-bootstrap/Container';
import ImagenTeam from './Styles/teamCupcake.png';
import './AboutUS.css'


const AboutUsComp = () =>{
return(<>
<Container>
<br /><br /><br />
    <h1 className='tituloAbout'>¿Quiénes somos?</h1>
    <br /><br />
<div className='letraAbout'>
Lucky Brand Cupcakes es una empresa establecida en 2022, un concepto que surgió de sus fundadores "Pris" y "Roberto" quienes a través de la repostería han logrado posicionar su negocio logrando tener un crecimiento exponencial. “Actualmente contamos con 12 sucursales ubicadas entre Toluca y Metepec: Tecnológico, Sauces, Leona Vicario, Vicente Guerrero, Ceboruco, San Buena, Culichioso, Zacango, Alfredo del Mazo, Centro y San Mateo”.
</div>

<br /><br /><br />

<img src={ImagenTeam} alt="team" id='imagenTeam'/>
</Container>
</>
)
}

export default AboutUsComp;