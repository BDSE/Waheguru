
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [ buttonColor, setButtonColor ] = useState('red');
    const [ disableButton, setDisableButton ] = useState(false);
    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

    return (
        <div >
            <button
                disabled={disableButton}
                style={{backgroundColor: buttonColor}}
                onClick={() => setButtonColor(newButtonColor)}>
                Change to {newButtonColor}
            </button>
            <br/>
            <label htmlFor='disable-button-checkbox'>
                disable button
            <input
                id="disable-button-checkbox"
                onChange={() => {
                setDisableButton(!disableButton)
            }} checked={disableButton} type={'checkbox'}/>
            </label>
        </div>
    );
}

export default App;
