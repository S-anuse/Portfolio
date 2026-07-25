import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_cw07i9y",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_3vkbnqu",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "l1GD8si6LWJjS6JKY",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message.");
          console.log(error);
          setLoading(false);
        },
      );
  };

  return (
    <section id="contact" className="contact">
      <h1 className="section-title">Contact Me</h1>

      <p>Feel free to reach out for collaborations or opportunities.</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">{loading ? "Sending..." : "Send Message"}</button>
      </form>

      <div className="contact-links">
        <a href="https://github.com/S-anuse" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sanjeevani-anuse-a478b6242/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sanjeevanianuse@gmail.com&su=Portfolio%20Contact"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
