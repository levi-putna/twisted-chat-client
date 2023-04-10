import React, { useState } from "react";
import styles from "./app.module.css";
import Launcher from './components/launcher/Launcher';
import Chat from "./components/chat/Chat";

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <Chat />
            </div>
        </div>
    );
};

export default App;
