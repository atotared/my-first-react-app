import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <div>
            <label for='name'>Enter your name:</label>
            <input id='name' type='text' placeholder='Alan Turing'></input>
            <button type='submit'>Submit</button>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
