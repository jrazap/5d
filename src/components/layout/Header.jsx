import avatar from "../../assets/header/avatar.webp";
import bars from "../../assets/header/bars.svg";
import { useState } from "react";
const Header = () => {
  const [active, setActive] = useState(false);

  const MENU = [
    {
      label: "Home",
      hash: "#banner",
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
      hash: "#blog",
    },
  ];

  return (
    <header className="h-[4.5rem] mt-1 md:mt-[0] sm:mt-[0] z-20">
      <div className="container rounded-md flex flex-row justify-between items-center bg-negrolineal h-full md:rounded-[0] sm:rounded-[0]">
        <div className="justify-start gap-1 basis-1/3 brand flex-centered shrink-0">
          <img className="brand-img" src={avatar} alt="" />
          <h3 className="flex font-medium text-white text-md md:text-sm sm:text-sm shrink-0">
            Hassan Abu Ali
          </h3>
        </div>

        <div
          className={`menu z-20 flex w-full items-center justify-between ${
            active ? "active" : ""
          }`}
        >
          <i
            className="flex text-white fa text-md tetx-end ms-auto lg:hidden fa-times"
            onClick={() => {
              setActive(false);
            }}
          />
          <ul className="flex gap-3 nav">
            {MENU.map((item) => {
              return (
                <li key={item.label} className="item">
                  <a className="font-medium text-white" href={item.hash}>
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
          className="w-6 h-4 lg:hidden"
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
