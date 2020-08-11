import React, { Component} from "react";
import { Redirect } from "react-router-dom";





class Search extends Component{
    

    state = {
        redirect : false,
        dane : JSON.parse(localStorage.getItem("KTReact")),
        
        
    }
    
    searchContact = () => {
        let nazwisko2; 
        nazwisko2 = document.querySelector("input[name='nazwisko']").value;
        
        let nazwisko3 = this.state.dane.map(nazw => nazw.nazwisko);

        var boolean = nazwisko3.includes(nazwisko2);
       

        if(boolean === true){
            document.getElementById("found").innerHTML = "Znaleziono!";
        }
        else{
            document.getElementById("found").innerHTML = "Nie znaleziono takiego kontaktu!";
        }
        

        
    }
  
    
    render(){
        if(this.state.redirect === true){
            return <Redirect to="/" />
        }
        return(
                <div className="search">
                    


                    <p>Podaj nazwisko: </p>
                    <input type="text" name="nazwisko" />
                    <button onClick={this.searchContact}>Znajdź!</button>
                    <div class = "box"><p id="found"></p></div>
                   
                    
                    
                    
                    
                    
            
            
                    

                </div>
                
                
        );
      
    }
    


}

export default Search;

