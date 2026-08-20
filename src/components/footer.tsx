"use client";

const Footer = () => {
  return (
    <div className="border-portfolio-gray text-portfolio-black font-portfolio-mono flex items-center justify-center border-t-2 px-10 py-8 text-sm tracking-wide md:justify-between md:text-base">
      <div className="hidden md:block">© Yubin Zhen</div>
      <div className="flex items-center gap-2">
        <div className="bg-portfolio-black inline-block h-1.5 w-1.5 rounded-full" />
        Last updated August 19, 2026
        <div className="bg-portfolio-black inline-block h-1.5 w-1.5 rounded-full" />
      </div>
      <div className="hidden md:block">Portfolio</div>
    </div>
  );
};
export default Footer;
