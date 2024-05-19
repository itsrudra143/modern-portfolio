import { useState } from "react";
const Portfolio = () => {
  const images = {
    all: [
      "pf-1.png",
      "pf-2.png",
      "pf-3.png",
      "pf-4.png",
      "pf-5.png",
      "pf-6.png",
    ],
    "psd design": ["pf-1.png", "pf-2.png"],
    presentation: ["pf-3.png", "pf-4.png"],
    "work ideas": ["pf-5.png", "pf-6.png"],
    mockup: ["pf-1.png", "pf-3.png"],
    logo: ["pf-2.png", "pf-4.png"],
    icons: ["pf-5.png"],
  };

  const barLinks = [
    "all",
    "psd design",
    "presentation",
    "work ideas",
    "mockup",
    "logo",
    "icons",
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div
      className="flex flex-col items-center justify-center gap-3 py-12"
      id="portfolio"
    >
      <div className="text-center w-full">
        <h1 className="sm:text-5xl xs:text-3xl tracking-wider text-[#15263e] uppercase font-bold md:text-5xl lg:text-6xl lg:gap-5">
          Portfolio
        </h1>
        <p className="sm:text-lg xs:text-sm tracking-wider text-[#4d4d4d] mt-3 md:text-xl lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="flex items-start xs:flex-col sm:flex-row gap-10 sm:items-start xs:items-center justify-center">
        <div className="flex sm:flex flex-col xs:grid grid-cols-3 px-4 gap-3 w-max place-items-center place-content-center md:flex">
          {barLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setSelectedCategory(link)}
              className={`text-lg xs:text-sm tracking-wider uppercase transition-colors font-bold leading-10 hover:text-[#a91aef] ${
                selectedCategory === link ? "text-[#a91aef]" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 sm:px-5 xs:px-8 md:px-6 lg:px-8">
          {images[selectedCategory].map((image, index) => (
            <img
              key={index}
              src={`/Images/${image}`}
              alt=""
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
