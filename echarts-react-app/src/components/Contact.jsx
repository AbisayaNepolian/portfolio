import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_mwhyo46",
        "template_uxru4ml",
        form.current,
        "PslHdXbBYbcWRmG2r"
      )
      .then(() => {
        form.current.reset();
        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong ❌");
      });
  };

  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <h2>Contact Me</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success Popup */}
        {success && (
          <div className="success-popup">
            ✅ Message Sent Successfully!
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;