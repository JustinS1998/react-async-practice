import React, { useState } from 'react';

export function MyPromise(props) {
    const [myMessage, setMyMessage] = useState('');

    const handleClick = () => {
        const promise1 = new Promise((resolve, reject) => {
            const res = Math.floor(Math.random() * 2); //either 0 or 1
            if (res) {
                resolve('resolved');
            } else {
                reject(Error('rejected'));
            }
        });

        promise1
        .then((res) => setMyMessage(res))
        .catch((err) => {
            setMyMessage('error');
            //console.log(err);
        });
    }

    return (
        <div className='thin-border'>
            <p>50% chance of resolve or reject using a promise</p>
            <button onClick={handleClick}>Retry</button>
            <p>{myMessage}</p>
            
        </div>
    );
}