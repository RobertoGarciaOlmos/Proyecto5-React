import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login } from '../services';
import Loader from '../components/Loader';


const LoginPage = ({guardarToken})=> {
  const[isLoading, setIsLoading] = useState(false);
  const onSubmited = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData= new FormData(event.target);
    const data = Object.fromEntries(formData);
    const {token:detalles}= await login(data);
    guardarToken(detalles)
    setIsLoading(false);
    event.target.reset()
  };
    
     return isLoading ? 
     
     ( <Loader/>) : (
        
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
