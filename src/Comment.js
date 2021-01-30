import React from 'react';
import faker from 'faker';

const Comment = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.animals()}></img>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {faker.name.firstName()}
                    </a>
                    <div className="metadata">
                        <span className="date">Posted on {faker.date.weekday()}</span>
                    </div>
                    <div className="text">{faker.lorem.sentence()}</div>
                </div>
            </div>
        </div>
    );
};

export default Comment;