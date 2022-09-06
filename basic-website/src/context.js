import React, { useContext,useReducer,useEffect } from "react"
import reducer from "./reducer"

const AppContext = React.createContext()

const API =  "https://thapareactapi.up.railway.app"

const AppProvider = ({children})=>{

    //useReducerHooks
    
    
    const initialState ={
        name:"",
        image:"",
        services: [],
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const updateHomePage = ()=>{
        return dispatch({
            type:"Home_Update",
            payload:{
                name:"Mukesh",
                image:"./images/hero.svg",
            }
        })
    }

    const updateAboutPage = ()=>{
        return dispatch({
            type:"About_Update",
            payload:{
                name:"About",
                image:"./images/about1.svg",
            }
        })
    }

//useReducerHooks



//to get the api data

const getServices = async(url)=>{
    try{
        const res = await fetch(url);
        const data = await res.json();

        dispatch({type:"GET_SERVICES", payload:data})
    }catch(error){
            console.log(error)
    }
}

//Api calling

useEffect(()=>{
    getServices(API)
},[])


    return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage }}>
        {children}
    </AppContext.Provider>
} 
//Api calling

// create a AppContext
// provider
// consumer

// insted of consumer we can use useContext


// gobal custom hooks

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext}