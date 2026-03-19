"use client";

import Image from "next/image";
import UCRLogo from "@/public/ucrLogo.webp";
import ACMLogo from "@/public/acmLogo.webp";
import CitrusHackLogo from "@/public/citrusHackLogo.webp";

const Experience = () => {
  return (
    <div id="experience" className="px-8 py-20 lg:px-36">
      <div className="font-portfolio-instrument-serif text-portfolio-black mb-12 text-5xl font-extrabold">
        Work Experience
      </div>

      <div className="flex gap-12 border-b border-black/10 py-10">
        {/* Left (logo + school) */}
        <div className="font-portfolio-sans-serif flex w-48 flex-col items-start gap-3">
          <Image
            src={UCRLogo}
            alt="UCR Logo"
            className="h-35 w-35 object-contain"
          />
          <p className="text-portfolio-black text-lg font-bold">
            UCR Geospacial Assessibility Lab
          </p>
        </div>

        {/* Position 1 */}
        <div className="font-portfolio-sans-serif flex flex-col gap-2 ml-12">
          <p className="text-portfolio-black text-xl italic">
            Undergraduate Research Assistant
          </p>
          <p className="text-portfolio-gray text-sm">Jan 2026 — Present</p>
          <div className="mt-1 flex flex-col gap-2">
            <p className="text-portfolio-darkgray text-sm">
              • Performing data validation for a large-scale Geospatial AI
              dataset, manually verifying and correcting 8,000+ LLM-generated
              questions and answers to improve model accuracy.
            </p>
            <p className="text-portfolio-darkgray text-sm">
              • Collaborating to refine training data for Vision-Language
              Models, focusing on AI interpretation of map-based navigation and
              spatial reasoning.
            </p>
            <p className="text-portfolio-darkgray text-sm">
              • Ensuring high-quality ground truth data for the MapBench
              project, a benchmark used to evaluate AI’s ability to follow
              human-readable directions.
            </p>
          </div>
        </div>
      </div>

      {/* UC Riverside */}
      <div className="flex gap-12 border-b border-black/10 py-10">
        {/* Left (logo + school) */}
        <div className="font-portfolio-sans-serif flex w-48 flex-col items-start gap-3">
          <Image
            src={ACMLogo}
            alt="UCR Logo"
            className="h-35 w-35 object-contain"
          />
          <p className="text-portfolio-black text-lg font-bold">
            UCR Association of Computing Machinery
          </p>
        </div>

        {/* Right (positions stacked) */}
        <div className="flex flex-col gap-8 ml-14">
          {/* Position 1 */}
          <div className="font-portfolio-sans-serif flex flex-col gap-2">
            <p className="text-portfolio-black text-xl italic">
              Project Lead Developer
            </p>
            <p className="text-portfolio-gray text-sm">Jan 2026 — Present</p>
            <div className="mt-1 flex flex-col gap-2">
              <p className="text-portfolio-darkgray text-sm">
                • Led teams of 10+ developers as Scrum Master, facilitating
                AGILE ceremonies and code reviews to streamline the development
                lifecycle and ensure 100% on-time delivery of platform features.
              </p>
              <p className="text-portfolio-darkgray text-sm">
                • Conduct technical code reviews and provide mentorship on
                Next.js and TailwindCSS best practices.
              </p>
              <p className="text-portfolio-darkgray text-sm">
                • Directed the end-to-end design and development lifecycle,
                collaborating with on-campus organizations to define UI/UX
                requirements in Figma and oversee implementation.
              </p>
            </div>
          </div>

          {/* Position 2 */}
          <div className="font-portfolio-sans-serif flex flex-col gap-2">
            <p className="text-portfolio-black text-xl italic">Web Developer</p>
            <p className="text-portfolio-gray text-sm">Jan 2025 — Dec 2025</p>
            <div className="mt-1 flex flex-col gap-2">
              <p className="text-portfolio-darkgray text-sm">
                • Developed high-performance frontend components using Next.js
                and TailwindCSS for campus organizations.
              </p>
              <p className="text-portfolio-darkgray text-sm">
                • Projects: AI/ML CSE Resources, Pre-Therapy Student Org, Thai
                Student Union, Mock Trial.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ACM — no border-b on last item */}
      <div className="flex gap-12 border-b border-black/10 py-10">
        {/* Left (logo + school) */}
        <div className="font-portfolio-sans-serif flex w-48 flex-col items-start gap-3">
          <Image
            src={CitrusHackLogo}
            alt="UCR Logo"
            className="h-35 w-35 object-contain"
          />
          <p className="text-portfolio-black text-lg font-bold">
            Citrus/Cutie Hack
          </p>
        </div>

        {/* Right (positions stacked) */}
        <div className="flex flex-col gap-8 ml-14">
          {/* Position 1 */}
          <div className="font-portfolio-sans-serif flex flex-col gap-2">
            <p className="text-portfolio-black text-xl italic">
              Software Engineering Lead
            </p>
            <p className="text-portfolio-gray text-sm">Jan 2026 — Present</p>
            <div className="mt-1 flex flex-col gap-2">
              <p className="text-portfolio-darkgray text-sm">
                • Directing the technical development of the hackathon portal,
                leading a team of 10+ software engineers.
              </p>
              <p className="text-portfolio-darkgray text-sm">
                • Assigning development tasks and conducting comprehensive code
                reviews to ensure platform stability.
              </p>
            </div>
          </div>

          {/* Position 2 */}
          <div className="font-portfolio-sans-serif flex flex-col gap-2">
            <p className="text-portfolio-black text-xl italic">
              Software Engineer
            </p>
            <p className="text-portfolio-gray text-sm">Oct 2025 — Dec 2025</p>
            <div className="mt-1 flex flex-col gap-2">
              <p className="text-portfolio-darkgray text-sm">
                • Architected web portals and dashboards, focusing on seamless
                user registration and event management.
              </p>
              <p className="text-portfolio-darkgray text-sm">
                • Translated Figma wireframes into functional interfaces,
                ensuring 100% alignment with branding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
