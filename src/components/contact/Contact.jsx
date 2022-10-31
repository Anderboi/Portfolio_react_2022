import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contacts" className="section">
      <h5 className="sub-subheader">Get In Touch</h5>
      <h2 className="subheader">Contact Me</h2>

      <div className="container contacts">
        <div className="contacts__options">
          <article className="contact">
            <HiOutlineMail className="contact__icon" />
            <h4 className="contacl__name">Email</h4>
            <h5 className="contact__address">upolovnew@gmail.com</h5>
            <a
              className="link contact__link"
              target="_blanc"
              href="mailto:upolovnew@gmail.com"
            >
              Send a message
            </a>
          </article>
          <article className="contact">
            <SiWhatsapp className="contact__icon" />
            <h4 className="contacl__name">WhatsApp</h4>
            {/* <h5 className="contact__address">+7 (925) 267 74 21</h5> */}
            <a
              className="link contact__link"
              target="_blanc"
              href="https://wa.me/79252677421"
            >
              Send a message
            </a>
          </article>
          <article className="contact">
            <FaTelegramPlane className="contact__icon" />
            <h4 className="contacl__name">Telegram</h4>
            <h5 className="contact__address">@Anderboi</h5>
            <a
              className="link contact__link"
              target="_blanc"
              href="https://telegram.me/Anderboi"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* contacts__options */}
        <form className="contact__form" action="">
          <input
            className="contact__form__input"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className="contact__form__input"
            type="email"
            name="email"
            id="email"
            placeholder="Youe Email"
            required
          />
          <textarea
            className="contact__form__input"
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
