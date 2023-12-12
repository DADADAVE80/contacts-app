import React, { useState } from "react";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContactModal from "./components/EditContact";

const App = () => {
  // State to store the list of contacts
  const [contacts, setContacts] = useState([]);

  // State to store the contact that is being edited
  const [editingContact, setEditingContact] = useState(null);

  // State to control if the edit modal is open
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const addContact = (contact) => {
    if (editingContact) {
      // If editing an existing contact, update the contact in the list
      setContacts(
        contacts.map((c) =>
          c.id === editingContact.id ? { ...c, ...contact } : c
        )
      );
      setEditingContact(null);
    } else {
      // If adding a new contact, add to the end of the list
      setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
    }
  };

  const deleteContact = (id) => {
    // Filter out the contact with the given id
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (contact) => {
    // Set the contact to edit and open the modal
    setEditingContact(contact);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    // Clear the editing contact and close the modal
    setEditingContact(null);
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <h1>Contact Management System</h1>

      {/* Pass props for adding/editing contacts */}
      <AddContact addContact={addContact} editingContact={editingContact} />

      {/* Pass props for displaying and editing contacts */}
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />

      {/* Edit modal */}
      <EditContactModal
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        contact={editingContact}
        editContact={addContact}
      />
    </div>
  );
};

export default App;
