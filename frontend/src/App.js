import logo from './logo.svg';
import './App.css';
import axois from 'axios'
import Navbar from './Components/NavBar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Transactions from './Components/Transacitons'


import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = ()=>{
  const [loggedIn, setLoggedIn]=useState(false)
  const [username, setUsername]=useState()
  const [displayForm, setDisplayForm]=useState(<div></div>)

  useEffect(()=> {
    if(loggedIn) {
      setDisplayForm(<Transactions></Transactions>)
    }

  }, [loggedIn])

  
    const handleLogin = (e, username, password) => {

      let data={"username": username,  "password": password}
      data=JSON.stringify(data)



      e.preventDefault()
      
      fetch('http://localhost:8000/token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      })
        .then(res => res.json())
        .then(json => {
          console.log("json", json)
          localStorage.setItem('token', json.token);
          setLoggedIn(true)
          setUsername(json.user.username)
        });
    }

    const handleSignup = (e, username, password)=>{
      e.preventDefault();
      console.log("handle signup")
      let data={"username": username,  "password": password}
      data=JSON.stringify(data)
      
      fetch('http://localhost:8000/api/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data, 
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          console.log(json)
          setLoggedIn(true)
          setUsername(username)
        });
    }

    const handleLogout = () =>{
      localStorage.removeItem('token')

    }
    const handleDisplayForm = (form) => {
      console.log("handle display form")
      setDisplayForm(form)
    }

     
      return (
        <div className="App">
        <Navbar
          loggedIn={loggedIn}
          setDisplayForm={setDisplayForm}
          handleSignup={handleSignup}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
        {displayForm}
        <h3>
          {loggedIn
            ? `Hello, ${username}`
            : 'Please Log In Or Sign Up'}
        </h3>
      </div>
       
      )
      }
  

export default App
