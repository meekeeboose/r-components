import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

import Segments from "./Segments";

// const App = () => {
//   return (
//     <div className='ui container comments'>
//       <ApprovalCard>
//         <CommentDetail
//           author='Sam'
//           timeAgo='Today at 4:45PM'
//           content='We did it'
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommentDetail
//           author='Alex'
//           timeAgo='Today at 1:20PM'
//           content='Just got promoted!'
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommentDetail
//           author='Jane'
//           timeAgo='Yesterday at 3:07AM'
//           content='Played basketball at home.'
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <Segments>
        <div className='ui icon header'>
          <i className='pdf file outline icon'></i>
          No documents are listed for this customer.
        </div>
        <div className='ui primary button'>Add Document</div>
      </Segments>

      <Segments>
        <h4 className='ui header'>For your information</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam rem
          ducimus fugiat cupiditate numquam unde molestiae veritatis nihil
          excepturi, a maiores in quia officiis eveniet culpa vitae
          necessitatibus quasi illum.
        </p>
      </Segments>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
