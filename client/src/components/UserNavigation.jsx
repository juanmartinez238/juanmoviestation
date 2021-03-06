import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Logout from '../components/Logout';


const UserNavigation = () => {
    return (
      <Container className='nav-container'>
          <Nav style={{marginTop: "10"}} variant="pills" className="justify-content-end" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/userhome">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/featured" eventKey="link-1">Featured</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/search" eventKey="link-2">Search Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/usercontact" eventKey="link-3">Contact Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Logout/>
          </Nav.Item>
        </Nav>
      </Container>
    )
}

export default UserNavigation;


