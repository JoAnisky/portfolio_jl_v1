import React from 'react';
import SectionsTitles from '../../components/SectionsTitles';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section className='contact' id="contact">
            <SectionsTitles name="Contact"/>
            <ContactForm/>
        </section>
    );
}

export default Contact;
