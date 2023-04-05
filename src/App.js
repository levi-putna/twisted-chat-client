import React, { useState } from "react";
import './App.css';
import Launcher from './components/launcher/Launcher';
import Modal from './components/modal/Modal';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        console.log("handleShowModal", showModal);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Launcher onClick={handleShowModal} showModal={showModal} />
            <Modal showModal={showModal} closeModal={handleCloseModal} />
        </div>
    );
};

export default App;
