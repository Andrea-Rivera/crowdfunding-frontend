import { useState,useEffect } from "react";
import postPledge from "../api/post-pledge";

export default function useProjects() {

    const [pledges, setPledges] = useState([]);
    const [isLoading, setIsLoading] =useState(true);
    const [error, setError] =useState();

    useEffect(() =>{
        getPledges()      
        .then((pledges) =>{
            setPledges(pledges);
            setIsLoading(false);
        })      
            .catch((error) =>{
                setError(error);
                setIsLoading(false);
            });}, []);
    
    return{ pledges, isLoading, error };

    }