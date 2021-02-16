import logo from './logo.svg';
import './App.css';
import axois from 'axios'
import Navbar from './Components/NavBar'
import Login from './Components/Login'


import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = ()=>{
  const [loggedIn, setLoggedIn]=useState(false)
  const [user, setUser]=useState({})
  const [displayForm, setDisplayForm]=useState("signup")
  const 

    useEffect(() => {
        if(loggedIn) {
          fetch('http://localhost:8000/user/current_user/', {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
          })
            .then(res => res.json())
            .then(json => {
              this.setState({ username: json.username });
            });
        }
      handleLogin(e, data)
    

     const refreshList = () => {
        axios.get("/api/user/").then(res => setData(res.data)).catch(err => console.log(err));
      };
      if(loggedIn) {
      return (
        <div>
          <Navbar></Navbar>

     
        </div>
      )
      }
      else {
        return  (
          <Login setLoggedIn={setLoggedIn} data={data} setUser={setUser}></Login>
        )
      }
}

export default App;
