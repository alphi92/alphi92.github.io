import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AddContacts from "./components/AddContacts"
import ListContacts from "./components/ListContacts"
import DelContacts from "./components/DelContacts"
import EditContacts from "./components/EditContacts"
import Search from "./components/Search"
import calling from "./calling.jpg"




import  "./App.css"



class App extends Component{
  

  handleClick = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
  }

  render(){

    
    return(
      
      

      <div className="stronaGlowna">

        <div className="logo"><img src={calling} alt="logo"/></div>
        
        
          <h1>Książka Telefoniczna</h1> 
          
          <button class="hamburger" onClick={this.handleClick}>
            <span class="hamburger__box">
              <span class="hamburger__inner"></span>
            </span> 
          </button>
          
          
          
        
        <BrowserRouter>

        <div class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item"><Link to="/">Lista kontaktów</Link></li>
            <li class="navigation__item"><Link to="/add">Dodaj nowy kontakt</Link></li>
            <li class="navigation__item"><Link to="/search">Wyszukaj kontakt</Link></li>
          </ul> 
         </div> 
        
          <Switch>
            <Route exact path="/" component={ListContacts} />
            <Route path="/add" component={AddContacts} />
            <Route path="/del/:id" component={DelContacts} />
            <Route path="/edit/:id" component={EditContacts} />
            <Route path="/search" component={Search} />
          </Switch>
          
        </BrowserRouter>
        
        <footer>
        <p>© 2020 Damian Skiba @alphonso92</p>
    </footer>
      
      </div>
    
    );
    
  }

}

export default App;