const Intro = () => {
  const services = [
    "Design (80%)",
    "Photography (65%)",
    "Marketing (50%)",
    "Branding (30%)",
  ];
  return (
    <div id="about" className="w-full h-max flex items-center justify-center xs:flex-col xs:p-6 xs:gap-5 sm:flex-wrap sm:p-5 md:flex-wrap md:p-4 md:gap-4">
      <div className="flex flex-col text-right gap-3 xs:text-center xs:gap-2 sm:text-center md:gap-1 lg:p-5">
        <p className="text-[#15263e] uppercase text-4xl font-semibold tracking-widest font-avant-garde-ce sm:text-2xl md:text-3xl lg:text-3xl">
          john smith
        </p>
        <p className="text-[#a21af0] uppercase font-avant-garde-ce text-xl font-bold lg:text-xl">
          web developer
        </p>
        <p className="text-[#494949] font-avant-garde-ce leading-7 tracking-wide font-semibold xs:text-base xs:font-normal xs:tracking-normal sm:font-normal md:font-normal md:text-base lg:text-base lg:font-normal">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipielit. Sunt sed ad possimus magm <br />
          maiores.Ipa Lorem ipsum dolor sit amet, <br /> consectetur adiic Sunt
          sed ad posimus <br />
          magnam maores. Ipsam as velt blanditiis <br />
          debitis consequuntur mollita umenda nam <br />
          obcaecati illo!
        </p>
      </div>
      <img
        src="/Images/sec2.png"
        alt=""
        className="object-cover sm:w-[300px] sm:h-[270px] md:w-[300px] md:h-[270px]"
      />
      <div className="flex flex-col items-center justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-[#4d4d4d] font-avant-garde-ce tracking-wider text-lg uppercase text-center gap-1"
          >
            <p>{service}</p>
            <div className="bg-gradient w-80 h-3 rounded-lg xs:w-64 xs:h-2 sm:w-64 sm:h-2 md:w-72 md:h-2 lg:w-72 lg:h-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Intro;
