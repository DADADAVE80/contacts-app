import React from "react";

// Contact component renders a single contact
// and buttons to edit or delete the contact
const Contact = ({ contact, deleteContact, editContact }) => {
  // Render contact details
  return (
    <div>
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>

      {/* Edit button triggers editContact callback and passes contact as argument */}
      <button onClick={() => editContact(contact)}>Edit</button>

      {/* Delete button triggers deleteContact callback and passes contact.id to identify contact to delete */}
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
