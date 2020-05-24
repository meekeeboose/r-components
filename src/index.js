import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Sam'
        timeAgo='Today at 4:45PM'
        content='We did it'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Alex'
        timeAgo='Today at 1:20PM'
        content='Just got promoted!'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Jane'
        timeAgo='Yesterday at 3:07AM'
        content='Played basketball at home.'
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
