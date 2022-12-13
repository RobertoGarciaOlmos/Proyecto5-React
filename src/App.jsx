import { useState } from "react";
import "./App.css";
import NavCup from "./components/Nav/Nav";

import PublicRoutesComponent from './routes/PublicRoutes';


function App() {
  const [form, setForm] = useState({
    correo: "",
    password: "",
  });


  return (
    <>
    <NavCup/>
     <PublicRoutesComponent/>
     </>
  );
}
export default App;


