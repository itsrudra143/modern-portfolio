import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navLinks = [
    { linkTitle: "Home", linkHref: "#home" },
    { linkTitle: "About", linkHref: "#about" },
    { linkTitle: "Our Services", linkHref: "#services" },
    { linkTitle: "Portfolio", linkHref: "#portfolio" },
    { linkTitle: "Experience", linkHref: "#experience" },
    { linkTitle: "Blog", linkHref: "#blog" },
    { linkTitle: "Contact", linkHref: "#contact" },
  ];
  const navigate = useNavigate();

  const handleClick = (e, href) => {
    e.preventDefault();
    navigate(`${href}`);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full h-20 bg-[#15263e] xs:hidden sm:h-14 sm:items-center sm:justify-center sm:flex md:h-16 lg:h-20">
      <ul className="flex gap-9 list-none text-white items-center justify-center sm:gap-2 md:gap-3">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-9 font-bold tracking-[3px] leading-[83px] uppercase font-avant-garde-ce sm:gap-2 sm:text-[9px] md:text-xs md:gap-5 md:pt-6 lg:text-base lg:gap-4 lg:pt-6"
          >
            <Link
              to={{ pathname: "/", hash: link.linkHref }}
              onClick={(e) => handleClick(e, link.linkHref)}
            >
              {link.linkTitle}
            </Link>
            {index < navLinks.length - 1 && (
              <div className="w-1 h-[2px] bg-white"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
