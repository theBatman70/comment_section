import Comment from '../model/comment';
import CommentsManager from '../model/comments_manager';

const initialData: Comment[] = [
  {
    id: 1,
    text: 'First-level comment 1',
    replies: [
      {
        id: 2,
        text: 'Second-level comment 1',
        replies: [
          {
            id: 5,
            text: 'Third-level comment 1',
            replies: [],
          },
        ],
      },
      {
        id: 3,
        text: 'Second-level comment 2',
        replies: [],
      },
    ],
  },
  {
    id: 4,
    text: 'First-level comment 2',
    replies: [],
  },
];

const commentsData = new CommentsManager(initialData);

export default commentsData;
