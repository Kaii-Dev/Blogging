import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  height: 520px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  .banner{
   facb
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
