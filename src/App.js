import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavCup from "./components/Nav/Nav";
import PublicRoutesComponent from './routes/PublicRoutes';


function App() {
  const [token, setToken] = useState(null);

  const guardarToken = (newToken)=> {
    setToken(newToken);
    localStorage.setItem("token",newToken) 
  };

  const borrarToken = ()=>{
    setToken(null);
    localStorage.clear();
  }
  useEffect(()=>{
    const token =localStorage.getItem('token');
      if(token) {
        guardarToken(token);
      }
    }, []);


  return (
    <>
    <NavCup token={token}/>
    <Container>
    <PublicRoutesComponent
     guardarToken ={guardarToken}
     borrarToken = {borrarToken}
     token={token}
     />
    </Container>
     <Footer/>
     </>
  );
}


export default App;


