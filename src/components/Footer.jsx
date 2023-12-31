import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentHidden } from "../app/FooterSlice";

const Footer = ({ footerAPI: { titles, links } }) => {
  const isHidden = useSelector(currentHidden);
  return (
    <>
      {isHidden && (
        <footer className="bg-theme pt-7 pb-5 ">
          <div className="nike-container text-slate-200">
            <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-3 md:w-full">
              {titles?.map((val, i) => (
                <div key={i} className="grid items-center">
                  <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                    {val.title}
                  </h1>
                </div>
              ))}
              {links?.map((list, i) => (
                <ul className="grid items-center gap-1" key={i}>
                  {list?.map((link, i) => (
                    <li className="text-sm sm:text-xs" key={i}>
                      {link.link}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="mt-5 text-center">
              <p className="text-sm md:text-center font-semibold">
                This was made by Tran Quoc Bao, fullstack developers but main in
                frontend.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
