import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login } from '../services';
import Loader from '../components/Loader';
import { UserContext } from '../context/UserContext';

const LoginPage = ()=> {
  const[isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const[errorMessage, setErrorMessage] = useState(null);
  const {guardarToken} = useContext(UserContext);
  
  const onSubmited = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData= new FormData(event.target);
    const data = Object.fromEntries(formData);
    const {token:detalles, error}= await login(data);
    if(error){
 
      setErrorMessage(error)
   
    }
    else{
    guardarToken(detalles);
    setErrorMessage(null);
    event.target.reset()
  }
  setIsLoading(false);
};
    
     return isLoading ?  ( 
     <Loader/>
     ) : ( 
        <form onSubmit={onSubmited}>
          <Form.Group className="mb-3" controlId="correo">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name= "correo" />
            </Form.Group>
          
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password"  name= "password"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </form>
      )
    ;
  
};

export default LoginPage;
