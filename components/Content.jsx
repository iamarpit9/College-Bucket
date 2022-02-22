import React from 'react'
import Description from "./Description/Description";
import Features from "./Features/Features";
import Screenshots from "./Screenshots/Screenshots";
import Statistics from "./Statistics/Statistics";
import Testimonials from "./Testimonials/Testimonials";

const Content = () => {
  return (
    <>
      <Description />
      <Features />
      <Screenshots />
      <Testimonials />
      <Statistics />
    </>
  );
}

export default Content;