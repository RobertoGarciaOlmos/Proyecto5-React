import { useEffect, useContext  } from "react";
import { CupcakeContext } from "../context/CupcakeContext";
import { verCupcakes } from "../services";



const CupcakePage = ()=> {
    const{cupcakes, guardarCupcakes} = useContext(CupcakeContext);

    const getCupcakes= async() =>{
    const {detalles}  = await verCupcakes();
    guardarCupcakes (detalles);
}

useEffect(()=>{
    getCupcakes();
},[]);

return(
<ul>
    {cupcakes.map((cupcake,index)=>(
    <il key={index}>  {cupcake.nombre}  - {cupcake.costo}</il>
    ))}
  </ul>      
);
}

export default CupcakePage;