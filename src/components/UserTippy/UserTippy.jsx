import {
  ArrowRightOnRectangleIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

import { useDispatch } from "react-redux";

import { setCloseCart } from "../../app/CartSlice.js";
import { Link } from "react-router-dom";
import { setStateNav } from "../../app/NavbarSlice";

const UserTippy = ({ userState }) => {
  const dispatch = useDispatch();
  const onMoveProfiles = () => {
    dispatch(
      setStateNav({
        navState: true,
      })
    );
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  return (
    <>
      {userState && (
        <div
          className={`grid grid-cols-1 grid-rows-2 p-1 mx-2 justify-items-start bg-slate-50 bg-opacity-100 rounded-lg shadow-lg shadow-slate-800`}
        >
          <Link to="profile">
            <div
              className={`flex col-span-1 text-black hover:bg-slate-200 row-span-1 w-full rounded-md py-2 px-2  cursor-pointer`}
              onClick={onMoveProfiles}
            >
              <IdentificationIcon className={`icon-style text-black`} />
              <p className="ml-2">User Information</p>
            </div>
          </Link>
          <Link className="w-full" to="/login">
            <div
              className={`flex col-span-1text-black hover:bg-slate-200 row-span-1 w-full rounded-md py-2 px-2  cursor-pointer`}
            >
              <ArrowRightOnRectangleIcon className={`icon-style text-black`} />
              <p className="ml-2">Log out</p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default UserTippy;
