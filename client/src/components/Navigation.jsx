import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
      <Container className='navcontainer'>
          <Nav style={{marginTop: "10"}} variant="pills" className="justify-content-center" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    )
}

export default Navigation;


