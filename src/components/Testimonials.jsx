const Testimonials = () => {
  return (
    <div className="flex w-full items-center justify-center relative font-avant-garde-ce">
      <img
        src="/Images/testimonials.png"
        alt=""
        className="bg-black object-cover h-[600px] w-full relative sm:h-[800px] md:h-[900px]"
      />
      <div className="absolute flex flex-col items-center justify-center gap-24 xs:gap-10 xs:p-3 md:gap-14 md:p-3">
        <h1 className="text-white font-bold uppercase  tracking-widest text-5xl xs:text-3xl">
          Testimonials
        </h1>
        <div className="flex items-center justify-center gap-20 xs:flex-col xs:gap-10 sm:flex-wrap sm:gap-16 md:flex-col">
          <div className="h-80 relative flex flex-col items-center justify-center gap sm:h-80 w-[600px] xs:h-52">
            <p className="text-white font-bell-mt font-bold text-7xl tracking-wider absolute left-5 top-1/4 xs:hidden sm:block">
              &ldquo;
            </p>
            <p className="text-right text-white  leading-7 tracking-wide text-base xs:text-center xs:text-sm sm:text-center md:text-base">
              Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad <br />
              possimus magm maiores. Ipsa dolor sit ile magnam <br />
              maores.Lorem ipm dolor amet, consecte adipiing lit <br />
              Sunt sed ad possimus magm maiores. Ipsa dolor sit ile
              <br /> magnam maores.
            </p>
            <p className="text-white font-bell-mt font-bold text-7xl tracking-wider absolute right-4 bottom-[42px] xs:hidden sm:block">
              &rdquo;
            </p>
          </div>
          <div className="flex gap-10 items-center justify-center md:gap-5">
            <img
              src="/Images/lady.png"
              alt=""
              className="xs:w-[100px] xs:h-[100px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px]"
            />
            <div className="flex flex-col items-center justify-center gap-2.5 md:gap-1">
              <h2 className="text-white text-3xl tracking-widest font-bold xs:text-xl md:text-xl">
                JON BROWN
              </h2>
              <p className="text-[#c714d5] text-xl tracking-widest font-semibold xs:text-base md:text-lg">
                Graphic Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
