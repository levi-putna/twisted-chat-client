import React, { useState } from "react";
import './App.css';
import Launcher from './components/launcher/Launcher';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Launcher onClick={handleShowModal} showModal={showModal} />
        </div>
    );
};

export default App;
