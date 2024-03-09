import CommentArray from "../../Data/video-details.json";
import Comments from "../Comments/Comments";

export default function CommentsList() {
  const comments = CommentArray[0].comments;

  console.log(comments);
  return (
    <div className="comment-list">
      {comments.map((comment, index) => {
        return (
          <Comments
            className={index === comments.length - 1 ? "last-comment" : "comment"}
            key={comment.id}
            commentData={comment}
          />
        );
      })}
    </div>
  );
}
