import React, { Component} from "react";
import { Redirect } from "react-router-dom";





class home extends Component{
    
    
    
       
    render(){
        
        return(
            <div className="domowaStrona">
            <p>Witaj!</p>
            <p>Na naszej stronie możesz wyszukać dowolny kontakt!</p>
            <img src="unnamed.jpg" alt="Ksiazka"></img>
            </div>
            
        );
    }
}

export default home;

