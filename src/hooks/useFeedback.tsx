import React, {useState} from "react";

export const useFeedback = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendFeedback = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: fullName,
                body: fullName + '\n' + email + '\n' + message,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => alert(JSON.stringify(json, null, 2)))
    }

    return {
        fullName: fullName, setFullName: setFullName,
        email: email, setEmail: setEmail,
        message: message, setMessage: setMessage,
        sendFeedback: sendFeedback
    }

}