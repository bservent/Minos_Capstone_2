import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'
import PropTypes from 'prop-types'

const Signup = (props) => {

  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")

   const  handleSubmit = ()=>{
       props.setUser(props.data[0])
       props.setLoggedIn(true)
    }
  const handleChange = (e)=> {
    const name=e.target.name
    const value=e.target.value 
    if (name==="username") {
      setUsername(value)
    }
    else {
      setPassword(value)
    }
  }
  console.log("hello")
  return (
    <form onSubmit={e => props.handleSignup(e, username, password)}>
      <h4>Sign Up</h4>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e)=>handleChange(e)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e)=>handleChange(e)}
      />
      <input type="submit" />
    </form>
  );

}

export default Signup

Signup.propTypes = {
  handleSignup: PropTypes.func.isRequired
};