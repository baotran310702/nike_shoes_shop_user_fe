import React from "react";
import { FeatureItems, Hero, Navbar, Sales, TopStories } from "./components";
import {
  heroapi,
  popularsales,
  topratesales,
  sneaker,
  highlight,
  story,
  footerAPI,
} from "./data/data.js";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Navbar />
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifPopular />
        <FeatureItems endpoint={highlight} ifPopular />
        <Sales endpoint={topratesales} />
        <FeatureItems endpoint={sneaker} />
        <TopStories endpoint={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
