import React from "react";

export default function Joke(props){
    console.log(props);


    return(
        <>
        <h1>{props.setup}</h1>
        <p>{props.punchline}</p>
        
        
        </>
    )
}