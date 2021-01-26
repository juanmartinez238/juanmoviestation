import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';


const Navigation = () => {
    return (
      <Container className='nav-container'>
          <Nav style={{marginTop: "10"}} variant="pills" className="justify-content-end" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login" eventKey="link-1">Log-in</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/createaccount" eventKey="link-2">Create Account</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Contact Me</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    )
}

export default Navigation;


