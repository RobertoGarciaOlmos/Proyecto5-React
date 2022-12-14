import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/cupcake`;


export const verCupcakes = async () => {
  try{ const { data } = await axios.get(`${path}/getAll`, {
    headers:{
      Authorization: 'Bearer' + localStorage.getItem("token"),
        }
  });
    return data;
  } catch (e){

  return {error: e.response.data.detalles} ;
}
  };