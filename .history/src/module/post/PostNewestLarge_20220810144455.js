import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostNewestLargeStyles = styled.div`
  .post {
    &-image {
      display: block;
      margin-bottom: 16px;
      height: 433px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
      }
    }
    &-category {
      margin-bottom: 10px;
    }

    &-title {
      margin-bottom: 12px;
    }
  }
`;

const PostNewestLarge = () => {
  return (
    <PostNewestLargeStyles>
    
        <PostImage>
        

        </PostImage>
         
      
      <PostCategory>Kiến thức</PostCategory>
      <PostTitle size="big">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <PostMeta></PostMeta>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;
