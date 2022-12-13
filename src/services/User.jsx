import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/user`;


export const login = async (userInfo) => {
    const { data } = await axios.post(`${path}/login`, userInfo);
    return data;
  };