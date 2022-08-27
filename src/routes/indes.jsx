import { Routes, Route} from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage';
import HomePage from '../pages/HomePage';
import InfoPage from '../pages/InfoPage';
import MenuPage from '../pages/MenuPage';
import ReservacionesPage from '../pages/ReservacionesPage';

const RoutesPages = () =>{
return(
<Routes>
    <Route path='/' element = {<HomePage/>}/>
    <Route path='/reservaciones' element = {<ReservacionesPage/>}/>
    <Route path='/menu' element = {<MenuPage/>}/>
    <Route path='/aboutus' element = {<AboutUsPage/>}/>
    <Route path='/info' element = {<InfoPage/>}/>
    <Route path='*' element = {<HomePage/>}/>
</Routes>

)
}

export default RoutesPages;