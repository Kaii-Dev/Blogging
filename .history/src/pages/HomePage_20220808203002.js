import Header from "components/layout/Header";
import Layout from "components/layout/Layout";
import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import HomeBanner from "module/home/HomeBanner";
import HomeFeature from "module/home/HomeFeature";
import React from "react";
import styled from "styled-components";

const HomePageStyles = styled.div``;
const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <Home
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
