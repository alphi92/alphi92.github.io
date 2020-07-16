import React, { Component} from "react";
import { Redirect } from "react-router-dom";





class Search extends Component{
    

    state = {
        dane : JSON.parse(localStorage.getItem("KTReact")),
        
    }
    
    searchContact = () => {
       // nazwisko: document.querySelector("input[name='nazwisko']").value

      //  if(nazwisko == value.nazwisko){
       //     return true;
      //  }
    }
  
    
    render(){
        return(
                <div>
                    
                    <p>Wyszukaj kontakt po nazwisku: </p><br />
                    <input type="text" name="nazwisko" />
                    <button>Znajdz</button>
                    
                    
                    {this.state.dane != null ? this.state.dane.map((value, key) =>
                
                <tr>
                    
                   
                    <td>{value.nazwisko}</td>
                    
                    
                </tr>
            
            ) : <p>blad</p>}
                    

                    

                </div>
                
                
        );
      
    }
    


}

export default Search;

