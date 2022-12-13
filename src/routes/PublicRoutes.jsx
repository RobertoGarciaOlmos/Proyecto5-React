import { Routes, Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import RegistroPage from '../pages/Registro';
import AboutPage from '../pages/AboutPage';
import CupcakePage from '../pages/CupacakePage';
import HomePage from '../pages/Home';
import InfoPage from '../pages/InfoPage';
import ReservacionesPage from '../pages/ReservacionesPage';
import { Navigate } from 'react-router-dom/dist';

const PublicRoutesComponent = ({guardarToken, token}) =>{
return(
<Routes>
    <Route path='/' element = {<HomePage/>}/>
    {token && (<Route path='/about' element = {<AboutPage/>}/>)}
    {!token && (<Route path='/login' element = {<LoginPage guardarToken={guardarToken}/>}/>)}
    {!token && (<Route path='/registro' element = {<RegistroPage/>}/>)}
    {token && ( <Route path='/cupcakes' element = {<CupcakePage/>}/>)}
    {token && ( <Route path='/reservaciones' element = {<ReservacionesPage/>}/>)}
    {token && ( <Route path='/info' element = {<InfoPage/>}/>)}    
    <Route path="*" element={<Navigate to="/" replace />}/>
</Routes>

)
}

export default PublicRoutesComponent;