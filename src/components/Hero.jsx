const Hero = () => {
  return (
    <div
      id="home"
      className="relative w-full sm:h-full flex flex-col sm:p-0 items-center justify-center bg-[#232d50] xs:h-96"
    >
      <div className="relative w-full h-full">
        <img
          src="/Images/sec1-bg.png"
          alt=""
          className="w-full h-full object-cover relative"
        />
      </div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center sm:gap-10 z-10 xs:gap-7 lg:gap-16 md:gap-8">
        <div className="flex flex-col items-center justify-center leading-none text-center font-avant-garde-ce uppercase text-white md:text-center">
          <h3 className="xs:text-xl font-semibold tracking-wider sm:text-lg sm:tracking-widest lg:text-2xl md:text-2xl">
            Hello, I am
          </h3>
          <div className="bg-gradient bg-clip-text">
            <h1 className="xs:text-[80px] sm:text-[120px] font-bold tracking-widest text-transparent lg:text-[200px] md:text-[100px]">
              John
            </h1>
          </div>
          <h1 className="tracking-[64px] font-semibold sm:tracking-widest ml-7 xs:text-4xl xs:tracking-[34px] sm:text-8xl lg:text-9xl md:text-[88px] md:tracking-[18px] md:ml-0">
            Smith
          </h1>
          <p className="sm:text-lg tracking-widest font-semibold xs:text-sm xs:mt-4 sm:mt-0 md:text-base lg:text-2xl">
            I have more than 10 years of experience
          </p>
        </div>
        <button className="sm:p-3 bg-gradient text-white text-center font-avant-garde-ce font-semibold tracking-widest xs:p-3 xs:text-sm sm:text-xs sm:font-medium sm:tracking-wide lg:p-4 lg:text-base md:text-sm md:p-2">
          <a className="w-full h-full" href={"/Resume.pdf"} download>
            DOWNLOAD CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
