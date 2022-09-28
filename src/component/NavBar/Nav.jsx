import React, { useState } from "react";
import Links from "../data/Links";
import close from "../images/icon-close.svg";
import open from "../images/icon-hamburger.svg";
import "./nav.css";
const Nav = () => {
  const [links, setLinks] = useState(Links);
  const [mode, setMode] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(`<i class="fa fa-sun"></i>DarkMode`);

  const toggleDarkMode = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
      setToggle(
        `<i class="fa fa-moon" className="w-full mx-auto block"></i>LightMode`
      );
      setMode((current) => (current = !current));
    }
    if (!mode) {
      document.documentElement.classList.remove("dark");
      setToggle(`<i class="fa fa-sun"></i> LightMode`);
      setMode((current) => (current = !current));
    }
  };
  return (
    <div className="">
      <div>
        <div className=" bg-black text-white">
          <nav className="w-full flex py-6 justify-between items-center navbar container mx-auto px-10 md:px-10">
            <h1 className="w-[124px] h-[32px] font-bold text-2xl uppercase cursor-pointer text-[#ffa600]">
              Kehinde
            </h1>
            <nav className="stroke">
              <ul className="list-none sm:flex hidden justify-end flex-1">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className={`text-white ${
                      index === link.length - 1 ? `mr-0` : `mr-10`
                    }`}
                  >
                    <a href={`${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={isOpen ? close : open}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              />
              <div
                className={`${
                  isOpen ? "flex" : "hidden"
                } p-6 top-20   right-0  w-[50%] h-[50%] sidebar absolute bg-white`}
              >
                <ul className="list-none flex-col justify-center items-center">
                  {links.map((link, index) => (
                    <li
                      key={index}
                      className={`font-bold text-black  ${
                        index === link.length - 1 ? `mb-0` : `mr-4`
                      }`}
                    >
                      <a href={`${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// import React from "react";
// import "./nav.css";
// const Nav = () => {
//   const [links, setLinks] = useState(Links);
//   const [mode, setMode] = useState();
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <div>
//         <header>
//           <h1 className="w-[124px] h-[32px] font-bold text-2xl uppercase cursor-pointer text-[#ffa600]">
//             Kehinde
//           </h1>
//           <nav className="stroke">
//             <ul className="list-none sm:flex flex-col hidden justify-end flex-1">
//               {links.map((link, index) => (
//                 <li
//                   key={index}
//                   className={`text-white ${
//                     index === link.length - 1 ? `mr-0` : `mr-10`
//                   }`}
//                 >
//                   <a href={`${link.id}`}>{link.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div className="sm:hidden flex flex-1 justify-end items-center">
//             <img
//               src={isOpen ? close : open}
//               alt="menu"
//               className="w-[28px] h-[28px] object-contain cursor-pointer"
//               onClick={() => setIsOpen((prev) => !prev)}
//             />
//             <div
//               className={`${
//                 isOpen ? "flex" : "hidden"
//               } p-6 top-20   right-0  w-[50%] h-[50%] sidebar absolute bg-white`}
//             >
//               <ul className="list-none flex-col justify-center items-center">
//                 {links.map((link, index) => (
//                   <li
//                     key={index}
//                     className={`font-bold text-black  ${
//                       index === link.length - 1 ? `mb-0` : `mr-4`
//                     }`}
//                   >
//                     <a href={`${link.id}`}>{link.title}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div class="follow">
//             <a href="#" class="fab fa-facebook-f"></a>
//             <a href="#" class="fab fa-twitter"></a>
//             <a href="#" class="fab fa-instagram"></a>
//             <a href="#" class="fab fa-linkedin"></a>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Nav;
