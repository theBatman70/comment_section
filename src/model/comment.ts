interface Comment {
  id: number;
  text: string;
  replies?: Comment[];
}

export default Comment;
