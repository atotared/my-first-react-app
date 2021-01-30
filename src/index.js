import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
const buttonText = { text: 'Click me' };

    return(
        <div>
            <label htmlFor="name" className="label">Enter your name:</label>
            <input id="name" type="text" placeholder="Alan Turing"></input>
            <button type="submit" style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
