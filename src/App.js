import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AddContacts from "./components/AddContacts"
import ListContacts from "./components/ListContacts"
import DelContacts from "./components/DelContacts"
import EditContacts from "./components/EditContacts"
import Search from "./components/Search"
import phonebook from "./phonebook.jpg"

import  "./App.css"

class App extends Component{

  render(){

    return(

      <div className="stronaGlowna">
        
          <h1>Książka Telefoniczna</h1>
          <img src={phonebook} alt="phonebook" />
        
        <BrowserRouter>

          
            
        <div class="topnav">
              <Link to="/">Lista kontaktów</Link>
            
              <Link to="/add">Dodaj nowy kontakt</Link>
            
              <Link to="/search">Wyszukaj kontakt</Link>
         </div>   
        
          <Switch>
            <Route exact path="/" component={ListContacts} />
            <Route path="/add" component={AddContacts} />
            <Route path="/del/:id" component={DelContacts} />
            <Route path="/edit/:id" component={EditContacts} />
            <Route path="/search" component={Search} />
          </Switch>
          
        </BrowserRouter>
        

      </div>

    );

  }

}

export default App;