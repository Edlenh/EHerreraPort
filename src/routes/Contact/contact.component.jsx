import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Resume from '../../components/assets/images/resume.png'
import './contact.style.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_09y02hq', 'template_qil4w51', form.current, 'kj44oMwiQWBluQp7m')
      .then((result) => {
         alert("Email Sent!");
         e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-main'>
    <div className='contact-form-main'>
    <form ref={form}  className='form' onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" required/>
    </form>
     <h1>MY RESUME <a href="https://docs.google.com/document/d/e/2PACX-1vQK2oPFEIBSEovpYb4i5lpxfws3UZ-b9FsR4WBPKV4kbYbjnjoYQMAFEurm_bMQs3ZAWPTpoIZLYzeB/pub" 
         target="_blank" rel="noopener noreferrer"> 
         <span className='link-main'style={{color: "#D2B7E5" ,marginLeft : 30}}>
         <img src={Resume} alt="Resume Logo"/>
             </span></a></h1>
     </div>
     <h3 className='ps'> I Look Forward To Hearing From You! </h3>
     </div>
     
  );
};
  
export default Contact