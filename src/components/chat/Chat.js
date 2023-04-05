import React, { useState, useRef } from 'react';
import styles from './chat.module.css';
import Message from './Message';
import Loading from './Loading';

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

        //messages.push({ content: inputValue, role: 'user', timestamp: Date.now() });
        setMessages([...messages, { content: inputValue, role: 'user', timestamp: Date.now() }]);

        if (inputValue.trim()) {
            setIsSending(true);

            try {
                const response = await fetch('http://localhost:3000/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        context: messages,
                        message: inputValue
                    }),
                });

                const data = await response.json();
                setMessages([...messages, { content: data.message, role: 'assistant', timestamp: Date.now() }]);
                setInputValue('');
            } catch (error) {
                console.error(error);
            } finally {
                setIsSending(false);
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