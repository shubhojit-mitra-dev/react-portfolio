import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) {
      alert(`Please wait ${cooldown} seconds before submitting again.`);
      return;
    }

    setIsSubmitting(true);
    setCooldown(60);
    
    const serviceID = 'service_k08nj3s';
    const templateID = 'template_a5x8z2b';
    const PUBLIC_KEY = 'jB2rbooE7DfRjLyy5';

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_name: 'Shubhojit Mitra',
      from_email: email,
      message: message,
    }

    emailjs.init

    emailjs.send(serviceID, templateID, templateParams, PUBLIC_KEY)
    .then((response) => {
      alert("Thank you for your message! Please check your email for a confirmation.");
      console.log(response);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error("Email failed to send!", error);
    })
    .finally(() => {
      const timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsSubmitting(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    });

  }

  const handleScroll = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <a href="#home" className="text-white text-3xl sm:text-3xl font-bold font-mono glowing-text">&lt;ShubhojitMitra /&gt;</a>
          <nav className="mt-5 flex flex-col space-y-2">
            <a onClick={(e) => handleScroll('hero', e)} className="hover:underline cursor-pointer">Home</a>
            <a onClick={(e) => handleScroll('about', e)} className="hover:underline cursor-pointer">About</a>
            <a onClick={(e) => handleScroll('tech-stack', e)} className="hover:underline cursor-pointer">TechStack</a>
            <a onClick={(e) => handleScroll('projects', e)} className="hover:underline cursor-pointer">Projects</a>
            <a onClick={(e) => handleScroll('footer', e)} className="hover:underline cursor-pointer">Contact</a>
          </nav>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                className="w-1/2 p-2 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input 
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                className="w-1/2 p-2 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              className="w-full p-2 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              className="w-full p-2 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              disabled={isSubmitting}
            >{isSubmitting ? `Please Wait ${cooldown} seconds...` : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;