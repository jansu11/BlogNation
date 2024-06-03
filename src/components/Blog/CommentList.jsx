// components/CommentList.jsx
import React from 'react';
import Comment from '../Comment/Comment';
const CommentList = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((com) => (
        <div key={com._id}> 
        <Comment name={com.name} 
            comment={com.comment}
            createdAt={com.createdAt}
        />

        </div>
        

        //<div key={comment._id} className="comment">
          //<p><strong>{comment.name}</strong></p>
          //<p>{comment.comment}</p>
          //<p><small>{new Date(comment.createdAt).toLocaleString()}</small></p>
        //</div>
      ))}
    </div>
  );
};

export default CommentList;
