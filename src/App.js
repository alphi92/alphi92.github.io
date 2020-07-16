import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AddContacts from "./components/AddContacts"
import ListContacts from "./components/ListContacts"
import DelContacts from "./components/DelContacts"
import EditContacts from "./components/EditContacts"
import home from "./components/home"
import Search from "./components/Search"
import  "./App.css"

class App extends Component{

  render(){

    return(

      <div className="stronaGlowna">
        
          <h1>Książka Telefoniczna</h1>
        
        <BrowserRouter>

          <ul>
            <li>
              <Link to="/home">Strona glowna</Link>
            </li>
            <li>
              <Link to="/">Lista kontaktów</Link>
            </li>
            <li>
              <Link to="/add">Dodaj nowy kontakt</Link>
            </li>
            <li>
              <Link to="/search">Wyszukaj kontakt</Link>
            </li>
          </ul>
        
          <Switch>
            <Route exact path="/" component={ListContacts} />
            <Route path="/add" component={AddContacts} />
            <Route path="/del/:id" component={DelContacts} />
            <Route path="/edit/:id" component={EditContacts} />
            <Route path="/home" component={home} />
            <Route path="/search" component={Search} />
          </Switch>
          
        </BrowserRouter>
        

      </div>

    );

  }

}

export default App;