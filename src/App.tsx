import { useEffect, useState } from 'react';

import './style.css';
import Comments from './components/Comments';
import commentsData from './data/comments';
import AddComment from './components/AddComment';

function App() {
  const [comments, setComments] = useState(commentsData.getComments());
  const [addedComment, setAdded] = useState(false);
  const [inputValue, setInput] = useState('');

  const onAddComment = () => {
    commentsData.addFirstLevelComment(inputValue);
    setAdded(true);
    setInput('');
  };

  useEffect(() => {
    //fetch comments and update state
    if (addedComment) {
      const fetchData = async () => {
        try {
          const data = await commentsData.getComments();
          setComments(data);
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      };
      fetchData();
      setAdded(false);
    }
  }, [addedComment]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <div style={{ marginLeft: 25 }}>
        <h1>Comments</h1>
        <AddComment
          type="Post"
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          addComment={onAddComment}
        />
      </div>
      <br />
      <Comments comments={comments} />
    </div>
  );
}

export default App;
