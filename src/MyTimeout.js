import React, {useState} from 'react';

export function MyTimeout(props) {
    const [myMessage, setMyMessage] = useState('');

    const handleClick = () => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('then1');
            }, 1000)
        });
        const then2 = (x) => {
            return (x + ' then2');
        }
        const then3 = (x) => {
            return (x + ' then3');
        }

        myPromise.then(then2).then(then3).then((x) => setMyMessage(x));
    };

    return (
        <div className='thin-border'>
            <p>Three thens chained together with setTimeout</p>
            <button onClick={handleClick}>Start</button>
            <p>{myMessage}</p>
            {(myMessage.length !== 0) && <button onClick={()=>setMyMessage('')}>Clear</button>}
        </div>
    );
}