import React from 'react';
import './App.scss';



import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import {Switch, Route} from 'react-router-dom';
import {useState} from 'react';


function App() {
 
  
  
  const [navToggle, setNavToggle]=useState(false);
  const [isActive, setIsActive]=useState(false);

  const navClick=()=>{
    setNavToggle(!navToggle);
    setIsActive(!isActive)

    
 
  }
  return (
    <div className="App">
      
       < div className ={`sidebar ${navToggle ?  'nav-toggle' : ''}`}>
       <NavBar/>
      </div>
       <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={navClick}>
        <span className="line1"></span>
        <span className="line2"></span>
       <span className="line3"></span>

      </div>
       <div className="main-content">
      
       <div className="content">
          <Switch>
            <Route path = "/" exact>
              <HomePage />
            </Route>
             <Route path = "/about" exact>
              <AboutPage />
           </Route>
            <Route path = "/portfolios" exact>
              <PortfoliosPage />
            </Route>
             <Route path = "/contact" exact>
             <ContactPage />
             </Route>
          </Switch>
          
       </div>
         </div>
      
    </div>
  // );
  )};


 export default App;
