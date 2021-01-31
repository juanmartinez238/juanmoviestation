import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';


const UserNavigation = () => {
    return (
      <Container className='nav-container'>
          <Nav style={{marginTop: "10"}} variant="pills" className="justify-content-end" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/userhome">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/browse" eventKey="link-1">Browse Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/search" eventKey="link-2">Search Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" eventKey="link-3">Contact Me</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    )
}

export default UserNavigation;


