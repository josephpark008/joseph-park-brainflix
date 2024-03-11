import "./CommentsSection.scss";
import avatar from "../../../assets/Images/Mohan-muruge.jpg";
import CommentsList from "../CommentsList/CommentsList";
import Buttons from "../../Buttons/Buttons";
import commentIcon from "../../../assets/Icons/add_comment.svg";

export default function CommentsSection(props) {
  const { videoData } = props;
  const { comments } = videoData;
  return (
    <div className="comment-section">
      <p className="comment-section__amount">3 Comments</p>

      <img
        className="comment-section__avatar"
        src={avatar}
        alt="avatar image"
      />
      <div className="comment-make">
        <p className="comment-make__header">JOIN THE CONVERSATION</p>
        <textarea
          className="comment-make__input"
          name=""
          id=""
          placeholder="Add a new comment"
        ></textarea>
        <Buttons
          ButtonClass="comment-button"
          ButtonText="COMMENT"
          ButtonIcon={commentIcon}
        />
      </div>
      <CommentsList commentList={comments} />
    </div>
  );
}
