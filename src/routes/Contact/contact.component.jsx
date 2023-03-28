import React, { useState } from 'react';
import Resume from '../../components/assets/images/resume.png'
import mailIcon from '../../components/assets/svg/sendmail.svg'

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the email and message
  }

  return (
    <div className='formMain'>
    <h1>LET'S CONNECT</h1>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ marginBottom: '10px' }}>
        <input 
          type="email" 
          placeholder='Email'
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ marginLeft: '20px' }}
        />
      </label>
      <label style={{ marginBottom: '10px' }}>
        <textarea 
          value={message} 
          placeholder='Send Me A Message!'
          onChange={(e) => setMessage(e.target.value)} 
          required 
          style={{ marginLeft: '20px' }}
        />
      </label>
      <button type="submit" style={{ marginTop: '10px' }}>Submit </button> 
    </form>
    <h1>HERE IS MY <span className='contact-photo-container'>
      <span className='contact-photo' style={{ 
      backgroundImage: `url(${mailIcon})` 
    }}> 
      RESUME
      </span>
      </span></h1>
    <a href="https://docs.google.com/document/d/e/2PACX-1vQK2oPFEIBSEovpYb4i5lpxfws3UZ-b9FsR4WBPKV4kbYbjnjoYQMAFEurm_bMQs3ZAWPTpoIZLYzeB/pub" 
        target="_blank" rel="noopener noreferrer"> 
        <span className='link-main'style={{color: "#D2B7E5" ,marginLeft : 30}}>
        <img src={Resume} alt="Resume Logo"/>
            </span></a>
    </div>
  );
}

export default ContactForm;