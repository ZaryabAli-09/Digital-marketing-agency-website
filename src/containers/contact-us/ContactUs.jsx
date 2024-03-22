import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function onFormSubmissionSuccessfully() {
  toast("Your application is submitted successfully");
}
function onFormSubmissionError() {
  toast("error occured while trying to submit your form");
}
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [number, setNumber] = useState("");
  const [needTodo, setNeedToDo] = useState("");
  const [budget, setBudget] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const [err, setErr] = useState(null);

  // email js

  function submitHandler(e) {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !companyName ||
      !number ||
      !needTodo ||
      !aboutUs ||
      !budget ||
      !message
    ) {
      return setErr("Please fill the required fields");
    }
    const modifiedName = name.replace(/\s/g, "").toUpperCase();
    const modifiedCompanyName = companyName.replace(/\s/g, "").toUpperCase();
    if (email == "" || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      return setErr("Please enter your email correctly");
    }
    if (number.length < 6) {
      return setErr("Please enter ther number correctly");
    }
    const Data = {
      user_name: modifiedName,
      user_email: email,
      user_companyName: modifiedCompanyName,
      user_number: number,
      user_needToDo: needTodo,
      user_budget: budget,
      user_hearFrom: aboutUs,
      user_message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        Data,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then(() => {
        onFormSubmissionSuccessfully();
      })
      .catch((err) => {
        onFormSubmissionError();
      });
  }
  return (
    <div className="contact-container" id="contact-us">
      <h1 className="gradient__text">Start a project</h1>
      <form className="contact-form">
        <select
          name="user_needToDo"
          onChange={(e) => {
            setNeedToDo(e.target.value);
          }}
          className="gradient__text"
        >
          <option value="">You need to do</option>
          <option value="Branding">Branding</option>
          <option value="Seo">Seo</option>
          <option value="Ads Managing">Ads Managing</option>
          <option value="UX/UI">UX/UI</option>
          <option value="Social Media">Social Media</option>
        </select>
        <input
          // required
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <input
          // required
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />

        <input
          name="user_companyName"
          required
          type="text"
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
          placeholder="Company name"
        />
        <input
          name="user_number"
          required
          type="tel"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          placeholder="Phone Number"
        />

        <select
          name="user_hearFrom"
          onChange={(e) => {
            setAboutUs(e.target.value);
          }}
          className="gradient__text"
        >
          <option value="">How did you hear about us</option>
          <option value="Google">Google</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Referred by someone">Referred by someone</option>
          <option value="Other">Other</option>
        </select>
        <select
          name="user_budget"
          onChange={(e) => {
            setBudget(e.target.value);
          }}
          className="gradient__text"
        >
          <option value="">Your budget</option>
          <option value="$500 - $1000">$500 - $1000</option>
          <option value="$1500 - $2000">$1500 - $2000</option>
          <option value="$2000 - $3000">$2000 - $3000</option>
        </select>
        <input
          required
          onChange={(e) => setMessage(e.target.value)}
          className="detail-input"
          type="text"
          placeholder="Share more details about your project"
        ></input>
        <button onClick={submitHandler}>Send</button>
        {err ? <div className="err"> {err}</div> : ""}
        {err &&
          setTimeout(() => {
            setErr(null);
          }, 2000)}
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactUs;
