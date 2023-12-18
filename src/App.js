
import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar.js';
import About from './component/About.js';
import Textform from './component/Textform.js';
import Alert from './component/Alert.js';

import {BrowserRouter as Router,Route,} from  "react-router-dom";



function App() {
  const[mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);
   
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type,

    })
   setTimeout (() => {
    setAlert(null);
   }, 3000);
    
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-"+cls);
    if(mode==='light'){
      setMode('dark');
      
      document.body.style.backgroundColor='#ced4da';
      
      showAlert("dark mode has been enables","success");
      
    }else{ 
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enables","success");
      // document.title='TextUtils: Light mode';
    }
  }
  return (
    <>
   <Router> 
     {/* <Switch>   */}
  
   < Navbar title="TextUtilis"  mode= {mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
          <Route  path="/About" >
               <About mode={mode}/>
          </Route>
          <Route path="/"> 
             <Textform showAlert={showAlert} heading ="Try TextUtils" mode={mode}/> 
           </Route> 
            </div> 
       {/* </Switch>   */}
      </Router>
  </>
  );
 }         
export default App;