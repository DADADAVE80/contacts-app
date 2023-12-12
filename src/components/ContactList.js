import React from "react";
import Contact from "./Contact";

// ContactList component renders a list of Contact components
const ContactList = ({ contacts, deleteContact, editContact }) => {
  // Map through the contacts array and render a Contact component for each contact
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <Contact
          key={contact.id} // Add a key for React to uniquely identify each contact
          contact={contact} // Pass the contact as a prop
          deleteContact={deleteContact} // Pass delete function as a prop
          editContact={editContact} // Pass edit function as a prop
        />
      ))}
    </div>
  );
};

export default ContactList;
