import React from 'react';
import MyForm from '../components/MyForm';
import UserNavigation from '../components/UserNavigation';

const ContactPage = () => {
    return (
        <div className="contact-page">
         
            <h1 className="contact-h1">Contact Me</h1>
            <MyForm/>
            <UserNavigation/>
        </div>
    )
}

export default ContactPage;
