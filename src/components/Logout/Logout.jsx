import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext";

const Logout = () =>
{ const {borrarInfoUser} = useContext(UserContext);

useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    borrarInfoUser()}, [])
    return null
}

export default Logout 