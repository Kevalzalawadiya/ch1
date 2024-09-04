import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home'
import Contact from './component/Contact/Contact'
import About from './component/About/About'
import { Navbar, Container, Nav , Row, Col, Button} from 'react-bootstrap';
import { useState } from 'react';



function App()
{
  const [mode, setMode] = useState(false)
  function handlerChange() {
    setMode((prevMode) => !prevMode)
    console.log(mode)
  }
  return (
    <Router>
      <Navbar bg={mode ? "dark" : "light"} data-bs-theme={mode ? "dark" : "light" } className="bg-body-tertiary">
        {/* <Container style={{ backgroundColor: "lightblue"}}> */}
        <Container>
          <Navbar.Brand as={Link} to="/"> Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about"> About</Nav.Link>
            <Nav.Link as={Link} to="/contact"> Contact </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Button variant='outline-primary' size='sm' onClick={handlerChange}> 
              {mode ? "True" : "False"} 
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
