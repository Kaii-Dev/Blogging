import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostNewestItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
  .post {
    &-image {
      display: block;
      flex-shrink: 0;
      width: 180px;
      height: 130px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
      }
    }
    &-category {
      margin-bottom: 8px;
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      margin-left: auto;
      color: #6b6b6b;
    }
    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
    &-title {
      margin-bottom: 8px;
    }
  }
`;
const PostNewestItem = () => {
  return (
    <PostNewestItemStyles>
      <PostImage></PostImage>
      <div className="post-content">
        <PostCategory type="secondary">Kiến thức</PostCategory>
        <PostTitle>
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>

        <PostMeta></PostMeta>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
