import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {MyPromise} from './MyPromise';
import { MyTimeout } from './MyTimeout';
import './index.css';

function App(props) {
    return (
        <>
            <h1>Asychronous Practice</h1>
            <MyPromise />
            <MyTimeout />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));