import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <>
      <div className="ui container comments">
        <ApprovalCard>
          <Comment
            author="Paul"
            timeAgo="Yesterday at 4:00 PM"
            commentText="Nice blog post!"
            avatar={faker.image.image()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comment
            author="John"
            timeAgo="Today at 10:00 AM"
            commentText="Interesting post!"
            avatar={faker.image.image()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comment
            author="Ringo"
            timeAgo="Two days ago at 13:30 PM"
            commentText="Very useful post."
            avatar={faker.image.image()}
          />
        </ApprovalCard>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
