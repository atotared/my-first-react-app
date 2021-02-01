import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

const App = () => {
    return(
        <>
            <div className="ui container comments">
            <Comment author="Paul"/>
            <Comment author="John"/>
            <Comment author="Ringo"/>
            </div>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
