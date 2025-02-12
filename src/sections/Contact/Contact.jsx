import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from "./ContactStyles.module.css";

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_box8f3w', 'template_15r19br', form.current, '5gPjpaOggjcK-Rqc4')
      .then((result) => {
          console.log(result.text);
          setSuccessMessage('E-mail enviado com sucesso!');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {successMessage && <p className="successMessage">{successMessage}</p>}
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          >
          </textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;