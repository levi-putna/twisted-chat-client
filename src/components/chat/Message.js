import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMermaid from 'remark-mermaidjs';
import simplePlantUml from '@akebifiky/remark-simple-plantuml';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import styles from './chat.module.css';
import ErrorBoundary from '../error/ErrorBoundary';

const code = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={dracula}
            language={match[1]}
            PreTag="div"
            {...props}
        />
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    )
}

const Message = ({ message }) => {
    const isUser = message.role === "user";
    const messageClass = isUser ? styles.userMessage : styles.replyMessage;
    const contentClass = isUser ? styles.userMessageContent : styles.replyMessageContent;
    const timestampClass = isUser ? `${styles.timestamp} ${styles.timestampRight}` : styles.timestamp;
    const timestampContainerReply = !isUser ? styles.timestampContainerReply : '';

    return (
        <div className={`${styles.message} ${messageClass}`}>
            <div className={styles.messageContentWrapper}>
                <div className={`${styles.messageContent} ${contentClass}`}>
                    <ErrorBoundary>
                        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMermaid, simplePlantUml]} components={{ code }}>{message.content}</ReactMarkdown>
                    </ErrorBoundary>
                </div>
                <div className={`${styles.timestampContainer} ${timestampContainerReply}`}>
                    <div className={timestampClass}>
                        {new Date(message.timestamp).toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;