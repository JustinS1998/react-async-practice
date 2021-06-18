import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {MyPromise} from './MyPromise';
import { MyTimeout } from './MyTimeout';
import { MyAsync } from './MyAsync';
import './index.css';

function App(props) {
    return (
        <>
            <h1>Asychronous Practice</h1>
            <MyPromise />
            <MyTimeout />
            <MyAsync />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));