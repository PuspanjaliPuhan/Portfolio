import React from 'react'
import './Contact.css'
import theme_pattern from '../assets/logo.svg'
import mail_icon from '../assets/mail-icon.svg'
import call_icon from '../assets/call-icon.svg'
import location_icon from '../assets/location-icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "1c4dca01-6638-4063-bc05-c9af0b47d8fc");

        // const object = Object.forEntries(formData);
        // const json = JSON.stringify(object);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,

            // headers: {
            //     "Content-Type": "application/json",
            //     Accept: "application/json"
            // },
        });

        const data = await response.json();
        // setResult(data.success ? "Success!" : "Error");
        alert(data.message);
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>puspanjalipuhan45@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+91-9861524388</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Bangalore, Karnataka, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />

                    <label htmlFor=""> Your Email</label>
                    <input type="email" placeholder='Enter your Email' name="email" id="" />

                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>

            </div>

        </div>
    )
}

export default Contact
