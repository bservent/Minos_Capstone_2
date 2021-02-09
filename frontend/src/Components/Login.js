import {Form, Button} from 'react-bootstrap'

const Login = (props) => {

   const  handleSubmit = ()=>{
       props.setUser(props.data[0])
       props.setLoggedIn(true)
    }

    return (<Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
          Submit
        </Button>
      </Form>)

}

export default Login