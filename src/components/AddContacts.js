import React, { Component} from "react";
import { Redirect } from "react-router-dom";




class AddContacts extends Component{

    state = {
        redirect : false
    }

    addContact = () =>{

        let newContact = {

            imie: document.querySelector("input[name='imie']").value,
            nazwisko: document.querySelector("input[name='nazwisko']").value,
            email: document.querySelector("input[name='email']").value,
            telefon: document.querySelector("input[name='telefon']").value

        }

        if(localStorage.getItem("KTReact")){
            
            let daneJSON = localStorage.getItem("KTReact");
            let daneObj = JSON.parse(daneJSON);
            daneObj.push(newContact);
            localStorage.setItem("KTReact", JSON.stringify(daneObj));

        }
        else{
            console.log("a");
            localStorage.setItem("KTReact", JSON.stringify([newContact]));
        }
        this.setState({redirect:true});

    }

    
    render(){

        if(this.state.redirect === true){
            return <Redirect to="/" />
        }

      return(
        
            <div className="dodaj">
                <p>
                    Imię:<br />
                    <input type="text" name="imie"  />
                </p>
                <p>
                    Nazwisko:<br />
                    <input type="text" name="nazwisko" />
                </p>
                <p>
                    Email:<br />
                    <input type="text" name="email"  />
                </p>
                <p>
                    Telefon:<br />
                    <input type="text" name="telefon"  />
                </p>
                <button onClick={this.addContact}>Zapisz nowe Dane</button>
                

            </div>

          
        

      );
    }
    


}

export default AddContacts;

