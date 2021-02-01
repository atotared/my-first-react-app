import React from 'react';


const Comment = (props) => {
    console.log(props);
    return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar}></img>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">Posted {props.timeAgo}</span>
                    </div>
                    <div className="text">{props.commentText}</div>
                </div>
            </div>
    );
};

export default Comment;