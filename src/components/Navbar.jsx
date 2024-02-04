import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuthContext();

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Registration</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#9ACCC9] px-2 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-20 lg:w-fit" src="/images/logo.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <div className="flex flex-row gap-2 items-center">
            <h3 className="hidden md:block">{user.displayName}</h3>
            {user?.photoURL && (
              <img className="rounded-full w-10" src={user.photoURL} />
            )}

            <button
              onClick={() =>
                logOut().then(() => toast.success("Logged Out Successful!"))
              }
              className="btn btn-neutral btn-sm lg:btn-md"
            >
              Log Out
            </button>
          </div>
        ) : (
          <NavLink to={"/login"}>
            <button className="btn btn-neutral btn-sm lg:btn-md">
              Login / Register
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
