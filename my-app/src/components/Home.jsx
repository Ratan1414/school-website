// src/pages/Home.jsx   (or wherever it lives)
import React from "react";
import Slideshow from "../components/Slideshow";
import Curriculum from "./Curriculum";
import slide1 from "../assets/children_image.png";     // add / replace as needed
import slide2 from "../assets/children_image.png";
import slide3 from "../assets/children_image.png";

export default function Home() {
  // describe each slide once; pass to <Slideshow />
  const slides = [
    { src: slide1, alt: "Happy children in classroom" },
    { src: slide2, alt: "Outdoor playtime at school" },
    { src: slide3, alt: "Students reading together" },
  ];

  return (
    <section className="section_1_image_banner">
      <Slideshow slides={slides} interval={2500} />
      <Curriculum/>
    </section>
    
      
   
  );
}
