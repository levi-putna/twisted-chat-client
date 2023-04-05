import React, { useState, useEffect } from "react";

const Conversation = () => {
    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        const storedConversation = JSON.parse(localStorage.getItem("conversation"));
        if (storedConversation) {
            setConversation(storedConversation);
        }
    }, []);

    const saveConversation = (newConversation) => {
        localStorage.setItem("conversation", JSON.stringify(newConversation));
        setConversation(newConversation);
    };

    const addMessage = (role, content) => {
        const newMessage = { role, content };
        const newConversation = [...conversation, newMessage];
        saveConversation(newConversation);
    };

    const resetConversation = () => {
        saveConversation([]);
    };

    return (
        <div>
            <button onClick={resetConversation}>Reset Conversation</button>
            {conversation.map(({ role, content }, index) => (
                <div key={index}>
                    <div>{role}</div>
                    <div>{content}</div>
                </div>
            ))}
        </div>
    );
};

export default Conversation;
