import React, { useState } from "react";
import Modal from "react-modal";

const EditContactModal = ({ isOpen, closeModal, contact, editContact }) => {
  // Create state for the edited contact using the passed in contact as initial state
  const [editedContact, setEditedContact] = useState({ ...contact });

  // Handle input changes by updating editedContact state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  // Save edited contact and close modal on save button click
  const handleSave = () => {
    editContact(editedContact);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Contact"
    >
      <h2>Edit Contact</h2>

      {/* Display inputs for each contact field */}
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={editedContact.name}
        onChange={handleInputChange}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={editedContact.email}
        onChange={handleInputChange}
        required
      />
      <label>Phone:</label>
      <input
        type="tel"
        name="phone"
        value={editedContact.phone}
        onChange={handleInputChange}
        required
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Cancel</button>
    </Modal>
  );
};

export default EditContactModal;
