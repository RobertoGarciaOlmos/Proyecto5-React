import Container from 'react-bootstrap/Container';
import ImageHis1 from './Styles/historiaCafe.png';
import ImageHis2 from './Styles/historiaCup.png';
import './Carrusel.css'

const Historia = () =>{
    return (
        <>
        <Container>
            
      
        <br /><br /><br />
        <h1 className='tituloHis'>HISTORIA DEL CUPCAKE</h1><br />
        <div className='letraHis'>El nombre de cupcake significa literalmente pastel-taza, del origen del nombre hay dos versiones, la primera versión es que ese nombre se le dió en el siglo XIX porque se horneaban en tazas de barro individuales (taza es cup en inglés), la segunda versión de la procedencia del nombre es que se debe a la manera de calcular los ingredientes empleados en su elaboración que se miden por tazas.</div>
        <br />
        <div className='letraHis'>El origen de estos pasteles se remonta hasta el año de 1796 cuando Amelia Simms publicó una receta en su libro de cocina “American Cookery”, pero no fue hasta el siglo XXI cuando los cupcakes se pusieron de moda en Estados Unidos donde se abrieron pastelerías que tenían como único protagonista este divertido pastel.</div>
        <br /><br /><br />
        <img  src={ImageHis2} alt="cup" id='imagenHis'/>
        <br /><br /><br /><br /><br /><br />
        <h2 className='tituloHis'>HISTORIA DEL CAFÉ</h2><br />
        <div className='letra2His'>La leyenda del pastor </div>  <br /><div className='letraHis'>Según una leyenda, fue un joven pastor yemení llamado Kaldi quien descubrió la planta del café. Kaldi observó un comportamiento extraño en su rebaño, que brincada y saltaba enérgicamente, tras ingerir los frutos rojos de un arbusto hasta entonces desconocido. Sorprendido por este hecho el pastor arrancó varios frutos y se los mostró a un superior religioso de un convento cercano. El religioso probó a hervir las bayas y beber la infusión resultante, pero era demasiado amarga y la desechó. Al tirar aquellos frutos al fuego observó cómo al tostarse desprendían un agradable aroma. De nuevo probó a preparar una infusión con las bayas ya tostadas, descubriendo entonces lo que hoy conocemos como café.</div>
        
        <br /><div className='letra2His'>Las montañas de Etiopía</div>
        <br /><div className='letraHis'>Los historiadores sitúan las primeras plantas de café en las regiones montañosas de Etiopía, antes del siglo IX. Desde allí pasaron al vecino Yemen, situado al Sur de la Península Arábica, desde donde fueron llevadas hasta Ceilán y la India. El café fue introducido en Europa cuando varios ejemplares de cafetos procedentes de Java fueron llevados al Jardín Botánico de Amsterdam. Desde entonces el cultivo del café se extendió por el continente, llegando incluso a las colonias que los países europeos tenían en América. El consumo de café comenzó a generalizarse en Europa a partir del siglo XVIII.</div>
        <br /><br /><br />
        <img src={ImageHis1} alt="cafe" id='imagenHis'  />
        <br /><br /><br />
        </Container>
        </>

    )
}

export default Historia;