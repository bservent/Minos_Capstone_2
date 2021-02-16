import logo from './logo.svg';
import './App.css';
import axois from 'axios'
import Navbar from './Components/NavBar'
import Login from './Components/Login'


import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = ()=>{
  const [data, setData] = useState([])
  const [loggedIn, setLoggedIn]=useState(false)
  const [user, setUser]=useState({})

  console.log(user)
    useEffect(() => {
        refreshList()
      });

     const refreshList = () => {
        // axios.get("/api/user/").then(res => setData(res.data)).catch(err => console.log(err));
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
