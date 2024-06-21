import { Link } from "react-router-dom";
import avatar from "../../assets/header/avatar.webp";
import bars from "../../assets/header/bars.svg";
import { useState } from "react";
const Header = () => {
  const [active, setActive] = useState(false);

  const MENU = [
    {
      label: "Home",
      hash: "/",
    },
    {
      label: "Skills",
      hash: "#skills",
    },
    {
      label: "Portfolio",
      hash: "#portfolio",
    },
    {
      label: "About",
      hash: "#about",
    },
    {
      label: "Blog",
      hash: "/blog",
    },
  ];

  const toggleNav = () => {};

  return (
    <header className="h-[4.5rem] mt-1 md:mt-[0] sm:mt-[0]">
      <div className="container rounded-md flex flex-row justify-between items-center bg-negrolineal h-full md:rounded-[0] sm:rounded-[0]">
        <div className="basis-1/3 brand flex-centered justify-start shrink-0 gap-1">
          <img className="brand-img" src={avatar} alt="" />
          <h3 className="text-white font-medium text-md md:text-sm sm:text-sm flex shrink-0">
            Hassan Abu Ali
          </h3>
        </div>

        <div
          className={`menu flex w-full items-center justify-between ${
            active ? "active" : ""
          }`}
        >
          <ul className="nav flex gap-3">
            {MENU.map((item) => {
              return (
                <li key={item.label} className="">
                  <a className="text-white font-medium" href={item.hash}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="#" className="btn main-btn">
            Contact Me
          </a>
        </div>

        <button
          className="lg:hidden w-6 h-4"
          onClick={() => {
            setActive(!active);
          }}
        >
          <img src={bars} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
