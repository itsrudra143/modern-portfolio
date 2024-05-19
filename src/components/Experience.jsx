const Experience = () => {
  const expData = {
    title: "Personal Advisor",
    year: "2015-2016",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipielit. Sunt sed ad possimus magm maiores.Ipa \n Lorem ipsum dolor sit amet, consectetur adiic Sunt sed ad posimus magnam maores. Ipsam \n  as velt blanditiis debitis consequuntur mollita umenda nam obcaecati illo!",
  };
  const arr = Array(4).fill(expData);
  return (
    <div
      id="experience"
      className="bg-gradient flex flex-col items-center justify-center gap-8 py-10 font-avant-garde-ce xs:text-center xs:p-2 md:p-3 md:text-center xs:py-8 md:py-10"
    >
      <h1 className="text-5xl text-white tracking-widest uppercase font-bold xs:text-3xl">
        experience
      </h1>
      <p className="text-white tracking-widest ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      {arr.map((data, index) => (
        <div
          key={index}
          className={`flex gap-8 items-center justify-center sm:flex-col sm:gap-4 xs:flex-col xs:gap-4 ${
            index % 2 != 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div
            className={`flex flex-col text-white font-avant-garde-ce tracking-widest uppercase text-lg font-bold justify-center md:items-center sm:items-center xs:items-center md:text-lg ${
              index % 2 != 0 ? "items-start" : "items-end"
            }`}
          >
            <h5>{data.title}</h5>
            <p>{data.year}</p>
          </div>
          <div className="bg-[#dcdcde] w-3 h-16 sm:w-16 sm:h-3 xs:w-16 xs:h-3"></div>
          <div>
            <p
              className={`whitespace-pre-line text-white tracking-wider font-avant-garde-ce leading-7 xs:text-sm lg:text-base lg:tracking-wide ${
                index % 2 != 0 ? "text-right" : "text-left"
              } sm:text-center sm:text-xs xs:text-center xs:text-xs xs:whitespace-normal md:text-xs`}
            >
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
