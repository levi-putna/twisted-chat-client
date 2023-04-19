import React, { useState, useRef } from 'react';
import styles from './chat.module.css';
import Message from './Message';
import Loading from './Loading';

const CHAT_URL = process.env.REACT_APP_CHAT_URL;

const Chat = () => {
    const [messages, setMessages] = useState([{
        role: "assistant",
        content: "Hi i'm TwistBot an AI for Twisted Brackets, I can answer questions about JavaScript, CSS, HTML and everything in between.\n\nHow can I help you?\n\nWould you like some hints about the type of things I can do?",
        timestamp: Date.now()
    }]);
    const [inputValue, setInputValue] = useState('');
    const [isSending, setIsSending] = useState(false);

    const messagesEndRef = useRef(null);
    const messageRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const focusMessageArea = () => {
        messageRef.current.focus(); // Call the focus() method on the ref
    }

    React.useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        const context = messages;

        messages.push({ content: inputValue, role: 'user', timestamp: Date.now() });
        setMessages([...messages]);

        if (inputValue.trim()) {
            setIsSending(true);

            try {
                const response = await Promise.race([
                    fetch(CHAT_URL, {
                        method: 'POST',
                        timeout: 120000, // 2 minutes timeout
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            context: context,
                            message: inputValue
                        }),
                    }),
                    new Promise((resolve, reject) => {
                        setTimeout(() => reject(new Error('Timeout')), 120000); // 2 minutes timeout
                    })
                ]);

                const data = await response.json();
                setMessages([...messages, { content: data.message, role: 'assistant', timestamp: Date.now() }]);
            } catch (error) {
                console.error(error);
                setMessages([...messages, { content: "Oops, i'm still a work in progress and something went wrong. Please wait a moment then try again.\n\nIf you want to explain to me what you did to cause the error, I can send an email to Levi to try and fix it.", role: 'assistant', timestamp: Date.now() }]);
            } finally {
                setIsSending(false);
                setInputValue('');
            }
        }
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messagesContainer}>
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
                {isSending && <Loading />}
                <div ref={messagesEndRef} />
            </div>
            <div className={styles.inputContainer}>
                <input
                    ref={messageRef}
                    type="text"
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                    className={styles.input}
                    disabled={isSending}
                />
                <button onClick={handleSendMessage} className={styles.sendButton} disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send'}
                </button>
            </div>
        </div>
    );
};

export default Chat;