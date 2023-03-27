import React, { useState } from "react";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Message:", message);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;