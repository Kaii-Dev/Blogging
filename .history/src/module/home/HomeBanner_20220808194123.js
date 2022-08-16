import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  height: 520px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
`;
const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="containter">
        .banner
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
