import React from "react";
import { icons } from "../data/icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Alert from "./Alert";

function Sidebar() {
  const navigate = useNavigate();

  useEffect(() => {
    icons.weather.pagesIcons.forEach((icon) => {
      const handleClick = () => {
        navigate(icon.link);
      };
      const button = document.getElementById(icon.name);
      button.addEventListener("click", handleClick);
      return () => button.removeEventListener("click", handleClick);
    });
  }, [navigate]);

  return (
    <div className="container w-20 h-screen bg-slate-300 mx-3 py-3 rounded-xl  overflow-hidden  ">
      <div className="flex flex-col items-center justify-between">
        {/* company icon */}
        <i className="bx bxl-visual-studio bx-md py-3"></i>
        <div className="flex items-center flex-col justify-between ">
          <div className="container ">
            {icons.weather.pagesIcons.map((icon, index) => (
              <button
                key={index}
                id={icon.name}
                className="flex items-center justify-center m-5  hover:bg-violet-600 active:bg-violet-700 focus:bg-violet-700 focus:text-white p-3 rounded-full hover:text-white focus:border-r-slate-400"
              >
                <i className={icon.icons}></i>
              </button>
            ))}
          </div>
        </div>
        <Alert />
      </div>
    </div>
  );
}

export default Sidebar;
