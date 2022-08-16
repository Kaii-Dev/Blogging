import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  margin-bottom: 60px;
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content {
      max-width: 600px;
      color: white;
    }
    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
  }
`;
const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="containter">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel et
              at alias fugit placeat, aliquid quas odit beatae asperiores nihil
              iusto eius quidem nam ullam dolorem ut libero voluptates hic.
            </p>
          </div>
          <div className="banner-image">
            <img src="/image-banner.png" alt="" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
