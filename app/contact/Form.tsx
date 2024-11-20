"use client";
import { FaFacebookSquare } from "react-icons/fa";
import "./contact.css";
import { FaSquareYoutube } from "react-icons/fa6";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

export default function Form() {
  const form = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      try {
        await emailjs.sendForm(
          "service_yhqsmze",
          "template_4c6zdf6",
          form.current,
          "CqOt_i2a7x9ig0tV6"
        );
        setMessage("Message sent successfully!");
        setIsError(false); // Reset error flag

        // Clear form fields
        form.current.reset();

        // Automatically hide the success message after 5 seconds
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      } catch (error) {
        console.error("Email sending error:", error);
        setMessage("Error sending message. Please try again.");
        setIsError(true); // Set error flag

        // Automatically hide the success message after 5 seconds
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }
    }
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.target.parentElement?.classList.add("focus");
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!e.target.value) {
      e.target.parentElement?.classList.remove("focus");
    }
  };
  return (
    <section className="w-full">
      <div className="container-contact" id="contact">
        <span className="big-circle"></span>

        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let&apos;s get in touch</h3>
            <p className="text">
              Ready to build your website? Contact us today! Our experts are
              here to guide you every step of the way, from planning to launch.
              Reach out now to start bringing your vision to life!
            </p>

            <div className="info">
              {/* <div className="information">
                <i className="fas fa-map-marker-alt"></i>
                <p>Davao, Philippines</p>
              </div> */}
              <div className="information">
                <i className="fas fa-envelope"></i>
                <p>support@shradertechnologies.com</p>
              </div>
              {/* <div className="information">
                <i className="fas fa-phone"></i>&nbsp&nbsp
                <p>123-456-789</p>
              </div> */}
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <Link href="https://www.facebook.com/shradertech/">
                  <FaFacebookSquare className="h-8 w-8 text-blue-600" />
                </Link>
                <Link href="hhttps://youtube.com/@shradertechnologies?si=sFJsVEXKMER252PV">
                  <FaSquareYoutube className="h-8 w-8 text-red-600" />
                </Link>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
              autoComplete="on"
            >
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="">Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                ></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
              {message && (
                <p
                  id="response-message"
                  className={isError ? "error-message" : "success-message"}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
