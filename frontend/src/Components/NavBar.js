import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

const NavigationBar = () => {
    console.log("I'm being rendered")
    return (
    <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Transactions</Nav.Link>
      <Nav.Link href="#home">Income</Nav.Link>
      <Nav.Link href="#link">Expenses</Nav.Link>
      <Nav.Link href="#home">Projection</Nav.Link>
      <Nav.Link href="#link">Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>)
}

export default NavigationBar