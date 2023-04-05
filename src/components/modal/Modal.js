import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ showModal, closeModal }) => {

  if(!showModal) return;

  return (
    <>
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal}>
              X
            </button>
            <p>This is the modal content.</p>
          </div>
        </div>
      <div className={styles.backdrop}></div>
    </>
  );
};

export default Modal;