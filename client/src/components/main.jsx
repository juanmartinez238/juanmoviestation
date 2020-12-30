import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';




const Main = () => {
    return (
        <Container className='mainimagecontainer'>
                <Image className="mainimage" src="https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </Container>
    )
}

export default Main;
