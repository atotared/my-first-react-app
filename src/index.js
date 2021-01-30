import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

const App = () => {
    return(
        <>
          <Comment />
          <Comment />
          <Comment />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
