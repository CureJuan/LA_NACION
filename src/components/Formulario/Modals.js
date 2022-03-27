import React from "react";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";
import ContactForm from "./ContactForm";

const Modals = () => {
  const [isOpenForm, OpenForm, closeForm] = useModal(false);
  return (
    <div>
      <button className="btn_subsc" onClick={OpenForm}>
        SUSCRIBITE
      </button>
      <Modal isOpen={isOpenForm} closeModal={closeForm}>
        <ContactForm />
      </Modal>
    </div>
  );
};

export default Modals;
