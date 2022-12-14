import {useState, createContext} from "react";

// !1.- Crear el contexto para el usuario
const CupcakeContext = createContext()

// !2.- Vamos a obtener un provider del CupcakeContext
const {Provider} = CupcakeContext;

//!3.- Crear componente
const CupcakeProvider =({children})=>{
//!4.- Cremaos nuestro estado global
const [cupcakes, setCupcakes] = useState([]);

//! 5.- Manejar el estado

const guardarCupcakes= (newCupcakes)=> setCupcakes(newCupcakes);


  //!6.- Retornamos componente

return (
  <Provider value = {{
    cupcakes,
    guardarCupcakes,
  }}>
    {children}
  </Provider>)
};

//!7.- Exportamos provider & export

export {
  CupcakeContext,
  CupcakeProvider,
}

