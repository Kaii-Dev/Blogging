import React from "react";
import styled from "styled-components";
const PostMetaStyles = styled.div``;

const PostMeta = ({ date = "Mar 23", authorName = "Andiez Le" }) => {
  return (
    <PostMetaStyles>
      <div className="post-info">
        <span className="post-time">{date}</span>
        <span className="post-dot"></span>
        <span className="post-author">Andiez Le</span>
      </div>
    </PostMetaStyles>
  );
};

export default PostMeta;
