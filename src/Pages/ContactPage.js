import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
// import MyMapComponent from '../Components/MyMapComponent'
import Title from '../Components/Title'

function ContactPage() {
    return (
        <div className="ContactPage">
            <Title title={'Contact Me'} span={'Contact Me'}/>
            <div className="container">
            <div className="map-section">
                <iframe  title="contact me" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.0964882028165!2d25.55784801522941!3d49.55820255913105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473036d5be066d8b%3A0x9a3e2a2508eca548!2z0LLRg9C70LjRhtGPINCT0LvQuNCx0L7QutCwINCU0L7Qu9C40L3QsCwgNTMsINCi0LXRgNC90L7Qv9GW0LvRjCwg0KLQtdGA0L3QvtC_0ZbQu9GM0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ2MDAy!5e0!3m2!1sru!2sua!4v1623573416435!5m2!1sru!2sua" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            {/* <MyMapComponent /> */}
            </div>
                <div className="contact-section">
                    <ContactItem className="icon-item" icon={phone} text={'+380956333565'} title={'Phone'}/>
                    <ContactItem className="icon-item" icon={email} text={'+380956333565'} title={'E-mail'}/>
                    <ContactItem  className="icon-item" icon={location} text={'+380956333565'} title={'Address'}/>

                </div>
            
           </div>
            
        </div>
    )
}

export default ContactPage
