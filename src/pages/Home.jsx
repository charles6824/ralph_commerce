import React, { useState, useEffect } from "react";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import Events from "../components/LandingPage/Events";
import Featured from "../components/LandingPage/Featured";
import Latest from "../components/LandingPage/Latest";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Events />
      <Featured />
      <Latest />
    </>
  );
};

export default Home;
