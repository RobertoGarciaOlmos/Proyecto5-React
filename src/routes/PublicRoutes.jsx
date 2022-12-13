import { Routes, Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import RegistroPage from '../pages/Registro';
import AboutPage from '../pages/AboutPage';
import CupcakePage from '../pages/CupacakePage';
import HomePage from '../pages/Home';

const PublicRoutesComponent = () =>{
return(
<Routes>
    <Route path='/' element = {<HomePage/>}/>
    <Route path='/about' element = {<AboutPage/>}/>
    <Route path='/login' element = {<LoginPage/>}/>
    <Route path='/registro' element = {<RegistroPage/>}/>
    <Route path='/cupcakes' element = {<CupcakePage/>}/>
</Routes>

)
}

export default PublicRoutesComponent;