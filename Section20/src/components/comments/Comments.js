import { useEffect, useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {}, []);

  const comments = [
    { id: "max", text: "lol" },
    { id: "max", text: "lol" },
  ];

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      <CommentsList comments={comments} />
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
    </section>
  );
};

export default Comments;
