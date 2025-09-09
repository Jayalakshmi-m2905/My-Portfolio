import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8351c24f-f7f1-40d4-8847-2335ce10ae11");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert("Mail sent successfully");
      window.location.href = '/Deploy-Resume/';

    }
  };


  return (
    <div className='contactPage'>
        <h1>Get In touch</h1>
       
     <form action="" className='ContactForm' onSubmit={onSubmit}>
      <div className='div-1'>
        <label htmlFor="">Full Name</label>
        <input type="text" name="name" id="" />
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="" />
        <label htmlFor="">Mobile Number</label>
        <input type="text" name="mobile"/>
      </div>
      <div className='div-2'>
        <label htmlFor="">Type Message</label>
        <textarea name="message" id="text"></textarea>
        <button>Send</button>
      </div>
     </form>
    </div>
  )
}

export default Contact
