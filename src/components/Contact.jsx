import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobileScreen,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const contactInfo = [
    {
      icon: faMobileScreen,
      title: "Phone Number",
      description: "+1 234 456-789 \n +123-456-7890",
    },
    {
      icon: faLocationDot,
      title: "Address",
      description: "8, Belgium, Brussels, \n Liutte 207 New York, USA",
    },
    {
      icon: faGears,
      title: "Email Address",
      description: "johnsmith@company.com \n youoffice@company.com",
    },
  ];
  return (
    <div className="w-full bg-[#dcdcde] flex gap-20 py-16 items-center justify-center xs:flex-col xs:items-start xs:px-20 sm:flex-wrap sm:justify-start sm:px-36 md:flex-wrap lg:gap-8 xs:gap-10">
      {contactInfo.map((info, index) => (
        <div key={index} className="flex gap-7 xs:gap-5">
          <div className="w-20 h-20 rounded-full bg-[#374362] flex items-center justify-center text-4xl text-white xs:w-14 xs:h-14 xs:text-2xl">
            <FontAwesomeIcon icon={info.icon} />
          </div>
          <div className="flex flex-col gap-2 whitespace-pre-line text-[#4d4d4d] font-avant-garde-ce text-lg tracking-normal leading-6 xs:text-sm">
            <h5 className="uppercase">{info.title}</h5>
            <p>{info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
