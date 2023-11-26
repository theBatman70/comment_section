import Action from './Action';
import { useState } from 'react';
import AddComment from './AddComment';
import commentsData from '../data/comments';

const Comments = ({ comments }) => {
  const [replyMode, setReplyMode] = useState(-1);
  const [inputValue, setInputValue] = useState('');
  const [cancelReply, setCancelReply] = useState(-1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onAddComment = (commentId) => {
    commentsData.addReply(commentId, inputValue);
    setCancelReply(-1);
    setInputValue('');
  };

  const onReply = (commentId) => {
    setReplyMode(commentId);
    setCancelReply(commentId);
  };
  const onCancelReply = () => {
    setCancelReply(-1);
  };

  return (
    <div style={{ marginLeft: 25 }} className="commentBox">
      {comments?.map((comment) => (
        <div>
          <div key={comment.id}>
            <div>
              <span className="comment">{comment.text}</span>
            </div>
            <div>
              <Action
                className="action"
                type="Reply"
                handleClick={() => onReply(comment.id)}
              />
            </div>
            {replyMode == comment.id && cancelReply == comment.id && (
              <div>
                <br />
                <AddComment
                  type="Reply"
                  addComment={() => onAddComment(comment.id)}
                  cancel={onCancelReply}
                  inputValue={inputValue}
                  handleInputChange={handleInputChange}
                />
                <br />
              </div>
            )}
          </div>
          <br />
          <div className="commentBox">
            <Comments comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
