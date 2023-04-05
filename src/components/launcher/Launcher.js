import React, { useState } from 'react'
import Icon from '../Icon';
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'

import styles from "./launcher.module.css";
import Chat from '../chat/Chat';

function Launcher({ onClick, showModal }) {

    const [expand, setExpand] = useState(false);
    const [open, setOpen] = useState(false);
    const [chat, setChat] = useState(false);

    const expandProps = useSpring({
        height: !expand ? '10%' : '90%',
        width: !expand ? '10%' : '90%',
        onRest: () => {
            setOpen(expand);
        }
    });

    const fadeProps = useSpring({
        opacity: open ? 1 : 0,
        display: expand ? 'block' : 'none',
        onRest: () => {
            setChat(open);
        }
    });

    const backgroundProps = useSpring({
        background: expand ? 'linear-gradient(315deg , rgba(255, 255, 255,0.2) 0%, rgba(255, 255, 255,0.1) 100%)' : 'linear-gradient(315deg , rgba(255, 255, 255,0.0) 0%, rgba(255, 255, 255,0.0) 100%)',
        display: expand ? 'block' : 'none',
    });

    const renderMessage = () => {

        if (open) { return }

        return (
            <div className={styles.note}>
                <span className={styles.message}>Hi, I'm TwistBot the Twisted Brackets AI. Can I help you?</span>
                <div className={styles.actions}>
                    <button className={styles.open} onClick={() => setExpand(true)}>
                        Chat
                    </button>
                </div>
            </div>
        );
    }

    const renderChat = () => {

        return (
            <animated.div style={fadeProps} className={styles.chat}>
                <Chat />
            </animated.div>
        )
    }


    const renderIcon = () => {


        return (
            <div className={styles.icon}>
                <Icon className={styles.image} />
            </div>
        )
    }

    return (
        <>
            <animated.div style={expandProps} className={styles.container} >
                {renderIcon()}

                <div className={styles.frame} >
                    {renderMessage()}
                    {renderChat()}
                </div>
            </animated.div>
            <animated.div style={backgroundProps} className={styles.background} onClick={() => setExpand(false)} />
        </>
    );
}

export default Launcher;