import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';
import { MDBIcon } from 'mdb-react-ui-kit';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9u2vntm', 'template_98pr1hp', e.target, 'user_KA1b4qLAX0wcJijw08SWz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div id="contact" className="container-contact">
            <section id="contact">
  
  <h1 class="section-header">Contact</h1>
  
  <div class="contact-wrapper">
    <form onSubmit={sendEmail} id="contact-form" class="form-horizontal">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" required/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" required/>
        </div>
      </div>

      <textarea type="text" class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      </button>
    </form>
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><MDBIcon icon="map-marker" /><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Feni sadar, Feni Bangladesh</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">01708332531</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">nazrul.com200@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>

        <div class="copyright">Copyright &copy;2021 Designed Developed By Nazrul</div>
      </div>
  </div>
</section>  
        </div>
    );
};

export default Contact;