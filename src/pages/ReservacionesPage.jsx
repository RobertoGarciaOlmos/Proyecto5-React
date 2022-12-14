import { useState, useEffect} from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import {db} from "../firebase";
import Container from 'react-bootstrap/Container';
import {doc, collection,getDocs,onSnapshot, addDoc, setDoc, deleteDoc} from "firebase/firestore";
import Mesero from "../components/Reservaciones/Reservacion";


const ReservacionesPage =() => {
    const [reservaciones,setreservaciones] =useState([]);

    const REF_COLLECTION = collection (db,"reservaciones");

    const getAllreservaciones = async () =>{
        const snapshot= await getDocs(REF_COLLECTION);
        snapshot.docs.forEach((reservacion)=>console.log(reservacion.data()));}
        
        const listenReservaciones =()=> {
            onSnapshot (REF_COLLECTION,(snapshot)=> {
                const reservaciones =[];
                snapshot.docs.forEach((reservacion)=>{
                    reservaciones.push({
                        ...reservacion.data(), 
                        id: reservacion?.id,
                    });

                });
                console.log("mensaje");
                setreservaciones(reservaciones)
            });
        }
        
        const agregarReservacion = async(reservacion)=>{
            addDoc(REF_COLLECTION, reservacion)
        }
        const editarReservacion = async(id, reservacion)=> setDoc(doc(db, "reservaciones", id), reservacion);
        const deletReservacion = async(id, reservacion)=>  deleteDoc(doc(db, "reservaciones", id), reservacion);

useEffect(() => {
listenReservaciones();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

    return  <>
    
    <Mesero/>
    <br /><br />
    <Container>
    <Form agregarReservacion= {agregarReservacion}/>
    </Container>
    <br /><br />
    <Container>
    <List reservaciones={reservaciones} editarReservacion = {editarReservacion} deletReservacion = {deletReservacion}/>
    </Container>
    
   
    </>
};

export default ReservacionesPage;
