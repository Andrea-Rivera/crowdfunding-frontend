import{ useContext }from"react";
import { AuthContext } from "../assets/components/AuthProvider";

export const useAuth = () =>{
    return useContext(AuthContext);
};
