"use client";

import Image from "next/image";
import ProfilePic from "@/public/profilePic.webp";

const Landing = () => {
  return (
    <div className="to-portfolio-white w-full bg-gradient-to-b from-[#7097AB]/40 via-[#7097AB]/40 pt-24 lg:pt-8">
      <div className="mb-7 flex justify-center md:hidden">
        <Image
          src={ProfilePic}
          alt="Profile Picture of Yubin Zhen"
          className="h-50 w-50 rounded-2xl object-cover shadow-lg"
        />
      </div>
      <div className="flex h-screen justify-center px-6 md:px-12">
        <div className="flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex-1">
            <div className="text-portfolio-gray mb-4 text-sm">
              B.S. CS @ UC Riverside · Class of 2027
            </div>

            <div className="font-portfolio-instrument-serif text-5xl font-extrabold md:text-7xl">
              Yubin
              <div className="italic">Zhen</div>
            </div>

            <p className="text-portfolio-darkgray mt-6 text-sm md:text-lg">
              I am a Computer Science major at UC Riverside, with a strong
              foundation in programming, software development and problem
              solving. I am eager to learn new things and am passionate about
              creating projects that will solve real-world challenges. I strive
              for new experiences and collaborating with others to allow me to
              grow as a developer/person.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-black px-6 py-3 text-sm text-white transition hover:opacity-80"
              >
                Get in touch
              </a>

              <a
                href="https://linkedin.com/in/yubinzhen"
                target="_blank"
                className="border-portfolio-gray hover:bg-portfolio-lightgray rounded-full border px-6 py-3 text-sm transition"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/yubinzhen"
                target="_blank"
                className="border-portfolio-gray hover:bg-portfolio-lightgray rounded-full border px-6 py-3 text-sm transition"
              >
                GitHub ↗
              </a>

              <a
                href="yubinzhenresume.pdf"
                target="_blank"
                className="border-portfolio-gray hover:bg-portfolio-lightgray rounded-full border px-6 py-3 text-sm transition"
              >
                Resume ↗
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-10">
              <div>
                <div className="text-2xl font-semibold">3.82</div>
                <div className="text-sm text-gray-500">GPA</div>
              </div>

              <div>
                <div className="text-2xl font-semibold">30+</div>
                <div className="text-sm text-gray-500">Devs led</div>
              </div>

              <div>
                <div className="text-2xl font-semibold">'27</div>
                <div className="text-sm text-gray-500">Graduating</div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-center md:justify-end">
            <Image
              src={ProfilePic}
              alt="Profile Picture of Yubin Zhen"
              className="hidden rounded-2xl object-cover shadow-lg md:block md:h-80 md:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
