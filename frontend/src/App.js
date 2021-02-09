import logo from './logo.svg';
import './App.css';
import axois from 'axios'


import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = ()=>{
    const [data, setData] = useState([])
    const [loaded, setLoaded]= useState(false)
    const [placeholder, setPlaceholder] = useState("Loading")

    useEffect(() => {
        refreshList()
      });

     const refreshList = () => {
        axios.get("/api/user/").then(res => setData(res.data)).catch(err => console.log(err));
      };

      return (
        <ul>
          {data.map(user => {
            return (
              <li key={user.name}>
                {user.name} - {user.email} 
              </li>
            );
          })}
        </ul>
      );
}

export default App;
