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

    const { setFullName, setEmail, setMessage, sendFeedback, setPhoneNumber } = useFeedback();

    function submitForm() {
        sendFeedback();
        onClose();
    }

    return (
        <div id={'modal'} className={'modal__overlay'}>
            <div className={'modal__wrapper'}>
                <div className={'modal__container'}>
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                            </div>
                            <div className="screen-header-right">
                                <button onClick={onClose}>X</button>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>CONTACT US</span>
                                </div>
                                <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                            </div>
                            <div className="screen-body-item">
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="NAME" onChange={event => setFullName(event.target.value)}/>
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="EMAIL" onChange={event => setEmail(event.target.value)}/>
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="CONTACT NO" onChange={event => setPhoneNumber(event.target.value)}/>
                                    </div>
                                    <div className="app-form-group message">
                                        <input className="app-form-control" placeholder="MESSAGE" onChange={event => setMessage(event.target.value)}/>
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className="app-form-button" onClick={onClose}>CANCEL</button>
                                        <button className="app-form-button" onClick={submitForm}>SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}