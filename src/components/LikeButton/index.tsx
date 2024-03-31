import React from "react";
import styles from "./LikeButton.module.scss";
import { LikeIcon, LikeIconFilled } from "../Icons";

const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <button className={styles.likeButton} onClick={handleClick}>
      {liked ? <LikeIcon /> : <LikeIconFilled />}
    </button>
  );
};

export default LikeButton;
