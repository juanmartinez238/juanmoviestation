import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';




const Main = () => {
    return (
        <Container className='main-image-container'>
                <Image className="main-image" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                <div className="image-title">Movie Station</div>
        </Container>
    )
}

export default Main;
