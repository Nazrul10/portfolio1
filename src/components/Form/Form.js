import React from 'react';
import emailjs from 'emailjs-com';


const Form = () => {

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
        <div className="container">
            <h2 className="text-white m-5">Contact Me</h2>

            <form onSubmit={sendEmail}>
                <div className="row  mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>

                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>

                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div>
                        <textarea className="form-control mt-2" placeholder="Your message" name="message" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div>
                        <input type="submit" className="btn btn-success m-3" value="send message" />
                    </div>
                </div>
            </form>
        </div>

    );
};

export default Form;
