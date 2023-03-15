import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function NavFunc() {
  return (
    <>
    <Navbar bg='light' expand="lg">
      <Container fluid>
        
        {/* <Navbar.Brand href="#"><img className='logoimg' src='../src/assets/photos/123.jpg'></img></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Exercise Activities</Nav.Link>
            <Nav.Link href="#action2">Activities Portfolio</Nav.Link>
            
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>










{/* 

      <Navbar className='nav'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       */}


    </>
  );
}

export default NavFunc;