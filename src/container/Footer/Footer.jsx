import React, {useState} from 'react'

import { images } from "../../constants"

import { AppWrap, MotionWrap } from '../../wrapper';

import { client } from '../../client';

import "./footer.scss"

const Footer = () => {

  const [formData, setFormData] = useState({name : "", email : "", message : ""})

  const [formConfirmed, setFormConfirmed] = useState(false)

  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
    .then(() => {
      setLoading(false)
      setFormConfirmed(true)
    })
  }
  return (
    <>
      <h2 className="head-text-white">Contact <span>with</span> me</h2>
      <div className="contact">
        <div className="contact-inputs">
          <img src={images.email} alt="email" />
          <a href="mailto:mohamed.elnahass.1498@gmail.com" className="p-text">
            You can mail me here
          </a>
        </div>
      </div>

      {!formConfirmed ? (
        <div className="form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your E-mail"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text-white" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text-white">Thank You For <span>Contacting</span> us <span>....</span></h3>
        </div>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'footer-section'),
  'contact',
  'app__whitebg',
);