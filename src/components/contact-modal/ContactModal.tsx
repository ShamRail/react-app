import React from 'react';
import './Contact.css';
import {useFeedback} from "../../hooks/useFeedback";

export interface ContactModalProps {
    isOpen: boolean,
    onClose: () => void,
}

export const ContactModal = ({isOpen, onClose}: ContactModalProps) => {

    if (!isOpen) {
        return null;
    }

    const { fullName, setFullName, email, setEmail, message, setMessage, sendFeedback } = useFeedback();

    function submitForm() {
        sendFeedback();
        onClose();
    }

    return (
        <div id={'modal'} className={'modal__overlay'}>
            <div className={'modal__wrapper'}>
                <div className={'modal__container'}>
                    <div className={'modal__header'}>
                        <h1>Contact us</h1>
                        <button className={'close__button'} onClick={onClose}>X</button>
                    </div>
                    <form className={'modal__body'}>
                        <label>Full name<sup style={{color: 'red'}}>*</sup></label>
                        <input name="full-name" type="text" value={fullName} onChange={event => setFullName(event.target.value)}/>
                        <label>Email <sup style={{color: 'red'}}>*</sup></label>
                        <input name="email" type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                        <label>Message <sup style={{color: 'red'}}>*</sup></label>
                        <textarea name="message" rows={10} onChange={event => setMessage(event.target.value)} value={message}></textarea>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <button type="button" style={{width: '100%', margin: '5px'}} onClick={onClose}>Close</button>
                            <button type="button" style={{width: '100%', margin: '5px'}} onClick={submitForm}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}