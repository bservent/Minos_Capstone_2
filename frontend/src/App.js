import logo from './logo.svg';
import './App.css';
import axois from 'axios'
import Navbar from './Components/NavBar'
import Login from './Components/Login'
import Signup from './Components/Signup'


import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = ()=>{
  const [loggedIn, setLoggedIn]=useState(false)
  const [username, setUsername]=useState({})
  const [displayForm, setDisplayForm]=useState("signup")

  useEffect (()=> {

    if(loggedIn) {
      fetch('http://localhost:8000/api/user/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }

  })
    const handleLogin = (e, data) => {
      e.preventDefault();
      fetch('http://localhost:8000/token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          setLoggedIn(true)
          setUsername(json.user.username)
        });
    }

    const handleSignup = (e, username, password)=>{
      console.log("in handle signup")
      let data={"username": username,  "password": password}
      data=JSON.stringify(data)
      
      console.log(data)
      e.preventDefault();
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
          setLoggedIn(true)
          setUsername(json.userName)
        });
        console.log(loggedIn)
        console.log(username)
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
          handleDisplayForm={handleDisplayForm}
          handleLogout={handleLogout}
        />
        {displayForm==="login"? <Login handleLogin={handleLogin}></Login> : <Signup handleSignup={handleSignup}></Signup>}
        <h3>
          {loggedIn
            ? `Hello, ${username}`
            : 'Please Log In Or Sign Up'}
        </h3>
      </div>
       
      )
      }
  

export default App
