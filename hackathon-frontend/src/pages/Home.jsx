import React from "react";
import TimelineWithAnimations from "../components/Timeline/Timeline";
import Hero from "../components/Hero";
import ExploreCard from "../components/ExploreCard";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-[#f8f6f3]">
      <Hero />
      <ExploreCard />
      <TimelineWithAnimations />
      <Footer />
    </div>
  );
};

export default Home;
