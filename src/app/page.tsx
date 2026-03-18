"use client";

import NavBar from "@/components/navBar";
import Landing from "@/components/landing";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="bg-portfolio-white">
      <NavBar />
      <Landing />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
