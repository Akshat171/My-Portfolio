import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.png";

function Contact() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);

    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for connecting us!");
        setPhone("");
        setName("");
        setEmail("");
        setDesc("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact us</h1>{" "}
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            className={styles.input}
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
            name="email"
            required
          />
          <small id="emailHelp" className={styles.formtext}>
            *We will never share your email with anyone else.
          </small>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            phone
          </label>
          <input
            type="phone"
            className={styles.input}
            id="phone"
            value={phone}
            onChange={handleChange}
            placeholder="phone"
            name="phone"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>
            Elaborate your concern:
          </label>
          <textarea
            className={styles.input}
            placeholder="write your concern here."
            rows="5"
            value={desc}
            onChange={handleChange}
            id="desc"
            name="desc"
          />
        </div>
        <button type="submit" className="w-full p-4 text-gray-100 mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
