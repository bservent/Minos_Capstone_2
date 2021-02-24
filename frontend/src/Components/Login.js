import {useState} from 'react'
import PropTypes from 'prop-types'

const Login = (props) => {

  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")


 
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


  return (
    <form onSubmit={e => props.handleLogin(e, username, password)}>
      <h4>Log In</h4>
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
      <input type="submit"/>
    </form>
  )

}

export default Login

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
};