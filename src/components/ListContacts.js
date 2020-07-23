import React, { Component} from "react";
import { Link } from "react-router-dom";




class ListContacts extends Component{
    
    state = {
        dane : JSON.parse(localStorage.getItem("KTReact"))

    }

   
    
    render(){
      return(
            
            <div className="wyswietlanie">
                <table>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">Imię</th>
                    <th scope="col">Nazwisko</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefon</th>
                    
                </tr>

                {this.state.dane != null ? this.state.dane.map((value, key) =>
                
                <tr>
                    <td scope="row"></td>
                    <td>{value.imie}</td>
                    <td>{value.nazwisko}</td>
                    <td>{value.email}</td>
                    <td>{value.telefon}</td>
                    <td><Link to={`/del/${key}`}>Usuń kontakt</Link></td>
                    <td><Link to={`/edit/${key}`}>Edytuj kontakt</Link></td>
                </tr>
            
            ) : <tr><td colspan="4">Brak danych</td></tr>}


            </table>
               

            </div>

          
        

      );
    }
    


}

export default ListContacts;

