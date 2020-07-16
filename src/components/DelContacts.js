import React, { Component} from "react";
import { Redirect } from "react-router-dom";





class DelContacts extends Component{
    
    state = {
        redirect : false,
        index : this.props.match.params.id,
        dane : JSON.parse(localStorage.getItem("KTReact"))
    }

    delContact = () =>{

        let lista = this.state.dane;
        lista.splice(this.state.index, 1);
        this.setState({dane : lista});

        localStorage.setItem("KTReact", JSON.stringify(this.state.dane));
        this.setState({redirect : true});

    }
    cancel = ()  => {
        this.setState({redirect : true})
    }

    
       
    render(){
        if(this.state.redirect === true){
            return <Redirect to="/" />
        }
     
     
        return(
        
            <div>
                <p>Czy na pewno chcesz usunac kontakt?</p>
                <button onClick={this.cancel}>Nie</button>
                <button onClick={this.delContact}>Tak</button>
              
            </div>

          
        

      );
    }
    


}

export default DelContacts;

