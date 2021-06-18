import React, {useState} from 'react';

export function MyAsync (props) {
    const [message, setMessage] = useState('');
    const myPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('1 second passed')
            }, 1000)
        });
    };
    const handleClick = async () => {
        const myMessage = await myPromise();
        setMessage(myMessage);
    };

    const clear = () => {
        setMessage('');
        setMessage2('');
    }

    const [message2, setMessage2] = useState('');
    const randomResolveReject = () => {
        return new Promise((resolve, reject) => {
            let res = Math.floor(Math.random() * 2);
            if (res) {
                resolve('resolved');
            } else {
                reject(Error('failed'));
            }
        });
    }
    const randomButton = async () => {
        try {
            const message = await randomResolveReject();
            setMessage2(message);
        } catch(e) {
            console.log(e);
            setMessage2('error');
        }
    }

    return (
        <div className='thin-border'>
            <p>Async and Await</p>
            <button onClick={handleClick}>Wait 1 second</button>
            <p>{message}</p>
            <button onClick={randomButton}>Random</button>
            <p>{message2}</p>
            {(message.length !== 0 || message2.length !== 0) && <button onClick={clear}>Clear</button>}
        </div>
    );
}