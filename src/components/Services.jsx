import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowRestore,
  faLightbulb,
} from "@fortawesome/free-regular-svg-icons";
import {
  faGears,
  faLink,
  faRocket,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  const serviceTitle = "Best Service";
  const serviceData =
    "Lorem ipm dolor amet, consecte adipiing lit\nSunt sed ad possimus magm maiores. Ipsa\ndolor sit ile magnam maores.";
  const icons = [
    faGears,
    faLink,
    faWindowRestore,
    faRocket,
    faPlug,
    faLightbulb,
  ];
  return (
    <div
      className="flex flex-col items-center justify-center py-10 md:gap-2 lg:gap-4"
      id="services"
    >
      <h1 className="sm:text-5xl xs:text-4xl tracking-wide text-[#15263e] uppercase font-bold md:text-6xl lg:text-6xl">
        Our Services
      </h1>
      <p className="text-[#4d4d4d] sm:text-lg tracking-wide sm:mt-4 xs:mt-2 md:mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-2 place-content-center place-items-center gap-10 sm:mt-8 xs:mt-4 md:flex md:flex-wrap xs:grid-cols-1">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-gradient w-28 h-28 rounded-full flex items-center justify-center xs:w-16 xs:h-16 text-[44px] xs:text-[30px] sm:h-20 sm:w-20 sm:text-[35px] md:text-[40px] md:w-24 md:h-24">
              <FontAwesomeIcon icon={icon} color="white" />
            </div>
            <h5 className="mt-4 text-2xl tracking-wider uppercase font-avant-garde-ce text-[#4d4d4d] font-semibold md:text-xl">
              {serviceTitle}
            </h5>
            <p className="mt-3 whitespace-pre-line text-center text-sm tracking-wider leading-7 sm:text-xs text-[#494949] font-avant-garde-ce sm:leading-5 md:leading-6 md:text-sm">
              {serviceData}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
