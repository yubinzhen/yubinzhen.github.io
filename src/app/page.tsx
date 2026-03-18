"use client";

import NavBar from "@/components/navBar";
import Landing from "@/components/landing";
import Intro from "@/components/intro";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="bg-portfolio-white">
      <NavBar />
      <Landing />
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
