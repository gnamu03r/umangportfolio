import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_86tea2e', 'template_cfrmq5i', form.current, {
          publicKey: 'RS5chIpO12OT10QpL',
        })
        e.target.reset();
    };
  return (
    <section className="contact section" id="contact">        
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
            <div className="contact__content">                
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__icon"></i>
                        <h3 className="contact__title">Email</h3>
                        <span className="contact__subtitle">umang03r@gmail.com</span>
                        <a href="mailto:fT8tT@example.com" className="contact__button">Send a message <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-linkedin contact__icon"></i>
                        <h3 className="contact__title">LinkedIn</h3>
                        <span className="contact__subtitle">Umang Raj</span>
                        <a href="https://www.linkedin.com/in/umang-raj-263013250/" className="contact__button">Send a message <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-github contact__icon"></i>
                        <h3 className="contact__title">GitHub</h3>
                        <span className="contact__subtitle">gnamu03r</span>
                        <a href="https://github.com/gnamu03r" className="contact__button">Send a message <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your suggestions</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name='name' className="contact__form-input" placeholder="Insert your name" />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name='email' className="contact__form-input" placeholder="Insert your email" />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Message</label>
                        <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write your message"></textarea>
                    </div>
            
                    <button className="button button--flex">
                        Send Message
                        <i className="uil uil-message button__icon"></i>
                    </button>
                </form> 
            </div>
        </div>
    </section>  
  )
}

export default Contact