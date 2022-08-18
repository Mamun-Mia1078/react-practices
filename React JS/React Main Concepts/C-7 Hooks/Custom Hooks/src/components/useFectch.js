import React,{useEffect, useState} from 'react'

const useFectch = (url) => {
    const [data, setData] = useState(url) ;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); 
    
    useEffect (() => {

        fetch(url)
        .then((res) => {
                     if(!res.ok){
                        throw Error("Fetching Data not Coming...");
                     }else {
                        return res.json();
                     }
            
            
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null); 
        })
        
        .catch((error) => {
            setError(error.message)
            setIsLoading(false);
        });
        
    },[url]);
    return {data, isLoading, error}
}

export default useFectch