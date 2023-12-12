import React, { useState } from "react";

const AddContact = ({ addContact }) => {
  // State hooks to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return;
    }

    // Simple phone validation to check 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number (10 digits only)");
      return;
    }

    // Pass form values to parent component
    addContact({ name, email, phone });

    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h2>Add Contact</h2>
      // Form with controlled inputs
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
