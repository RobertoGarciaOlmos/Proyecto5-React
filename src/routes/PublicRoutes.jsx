import { useContext} from "react";
import { Routes, Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import RegistroPage from '../pages/Registro';
import AboutPage from '../pages/AboutPage';
import CupcakePage from '../pages/CupacakePage';
import HomePage from '../pages/Home';
import InfoPage from '../pages/InfoPage';
import ReservacionesPage from '../pages/ReservacionesPage';
import { Navigate } from 'react-router-dom/dist';
import { UserContext } from "../context/UserContext";
import Logout from "../components/Logout/Logout";
import MenuPage from "../pages/MenuPage";
import ProfilePage from "../pages/ProfilePage";

const PublicRoutesComponent = () =>{
const {
    user: {token}
 } = useContext(UserContext);

return(
<Routes>
    <Route path='/' element = {<HomePage/>}/>
    {token && (<Route path='/about' element = {<AboutPage/>}/>)}
    {!token && (<Route path='/login' element = {<LoginPage/>}/>)}
    {!token && (<Route path='/registro' element = {<RegistroPage />}/>)}
    {token && ( <Route path='/cupcakes' element = {<CupcakePage/>}/>)}
    {token && ( <Route path='/reservaciones' element = {<ReservacionesPage/>}/>)}
    {token && ( <Route path='/info' element = {<InfoPage/>}/>)}
    {token &&( <Route path="/Logout" element={<Logout/>}/>)}
    {token &&( <Route path="/menu" element={<MenuPage/>}/>)}
    {token &&( <Route path="/profile" element={<ProfilePage/>}/>)}
    <Route path="*" element={<Navigate to="/" replace />}/>
</Routes>

)
}

export default PublicRoutesComponent;