import React, {useContext, useEffect, useState} from "react";

const API_URL= `http://www.omdbapi.com/?apikey=99c8b823`;

const AppContext = React.createContext();

const AppProvider=({children})=>{

const[isLoading,setIsLoading]= useState(true);
const[movie,Setmovie]=useState([]);    
const[isError, SetIsError]= useState({show:'false', msg:''});
const[query,setQuery]=useState();

const getMovies=async(url)=>{
    try{
const res= await fetch(url)
const data =await res.json();
console.log(data);
if(data.Response ==='True'){
setIsLoading(false);    
Setmovie(data.Search);
}else{
    SetIsError({
        show:true,
        msg:data.Error
    })
}
    }catch(error){
        console.log(error);
    }
}    

useEffect(()=>{
    let timerOut= setTimeout(()=>{
        const defaultvalue= query??'Titanic';
        getMovies(`${API_URL}&s=${query??defaultvalue}`);
    },1000);
    return()=> clearTimeout(timerOut);
},[query]);

return<AppContext.Provider value={{isError,isLoading,movie,query,setQuery}}>
    {children}
</AppContext.Provider>
};

const useGlobalContext=()=>{
    return useContext(AppContext)
};

export{AppContext,AppProvider, useGlobalContext};
