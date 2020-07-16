import React, { Component} from "react";
import { Redirect } from "react-router-dom";





class EditContacts extends Component{

    dane = JSON.parse(localStorage.getItem("KTReact"));
    index = this.props.match.params.id;

    state = {
        redirect : false,
        imie : this.dane[this.index].imie,
        nazwisko : this.dane[this.index].nazwisko,
        email : this.dane[this.index].email,
        telefon : this.dane[this.index].telefon,
    }
  valueChange = (event) =>{
      this.setState({[event.target.name] : event.target.value })
  }

  editContact = () => {
    let newContact = {
        imie : this.state.imie,
        nazwisko : this.state.nazwisko,
        email : this.state.email,
        telefon : this.state.telefon,
    }
    let daneJSON = localStorage.getItem("KTReact");
    let daneObj = JSON.parse(daneJSON);

    daneObj[this.index] = newContact;
    localStorage.setItem("KTReact", JSON.stringify(daneObj))
    this.setState({ redirect : true})

  }
    
    render(){
        if(this.state.redirect === true){
            return <Redirect to="/" />
        }
      return(
        
        <div>
        <p>
            Imię:<br />
            <input type="text" name="imie" value={this.state.imie} onChange={this.valueChange} />
        </p>
        <p>
            Nazwisko:<br />
            <input type="text" name="nazwisko" value={this.state.nazwisko} onChange={this.valueChange} />
        </p>
        <p>
            Email:<br />
            <input type="text" name="email" value={this.state.email} onChange={this.valueChange} />
        </p>
        <p>
            Telefon:<br />
            <input type="text" name="telefon" value={this.state.telefon} onChange={this.valueChange} />
        </p>
        <button onClick={this.editContact}>Edytuj dane</button>
    </div>


          
        

      );
    }
    


}

export default EditContacts;

