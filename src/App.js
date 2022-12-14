import { useEffect,useContext } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavCup from "./components/Nav/Nav";
import PublicRoutesComponent from './routes/PublicRoutes';
import {UserContext} from "./context/UserContext.jsx"

function App() {
const {guardarToken} = useContext(UserContext);
useEffect(()=>{
   const token =localStorage.getItem("token");
      if(token) {
        guardarToken(token);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



  return (
    <>
    <NavCup/>
    <Container>
    <PublicRoutesComponent/>
    </Container>
     <Footer/>
     </>
  );
}


export default App;


