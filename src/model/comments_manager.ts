import Comment from './comment';

class CommentsManager {
  private comments: Comment[];
  private highestCommentId: number;

  constructor(initialComments: Comment[]) {
    this.comments = initialComments;
    this.highestCommentId = this.findHighestCommentId(initialComments, 0);
  }

  public getComments(): Comment[] {
    return this.comments;
  }

  public addFirstLevelComment(newText: string): void {
    const id = this.findHighestCommentId(this.comments, 0) + 1;
    const newComment: Comment = { id: id, text: newText, replies: [] };
    this.comments.push(newComment);
  }

  public addReply(commentId: number, text: string): void {
    const comment = this.findCommentById(commentId);

    if (comment) {
      const id = ++this.highestCommentId;
      const newComment: Comment = { id, text, replies: [] };
      comment.replies.push(newComment);
    }
  }

  private findCommentById(
    commentId: number,
    comments = this.comments
  ): Comment | null {
    for (const comment of comments) {
      if (comment.id === commentId) {
        return comment;
      }
      if (comment.replies.length > 0) {
        const foundComment = this.findCommentById(commentId, comment.replies);
        if (foundComment) {
          return foundComment;
        }
      }
    }
    return null;
  }

  private findHighestCommentId = (
    comments,
    highestCommentId: number
  ): number => {
    for (const comment of comments) {
      if (comment.id > highestCommentId) {
        highestCommentId = comment.id;
      }
      if (comment.replies.length > 0) {
        highestCommentId = this.findHighestCommentId(
          comment.replies,
          highestCommentId
        );
      }
    }
    return highestCommentId;
  };
}

export default CommentsManager;
