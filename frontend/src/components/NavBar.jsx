import { NavLink, useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between text-sm py-1 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <Link to="/">
        <img className="w-44 cursor-pointer" src="/NPH.png" alt="Home Logo" />
      </Link>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <li>
          <NavLink
            to="/"
            className="group flex flex-col items-center text-lg"
          >
            {({ isActive }) => (
              <>
                Home
                <span
                  className={`block h-0.5 w-3/5 transition-transform duration-300 origin-left
                    ${isActive ? "bg-blue-500 scale-x-100" : "bg-blue-500 scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/docters"
            className="group flex flex-col items-center text-lg"
          >
            {({ isActive }) => (
              <>
                All Doctors
                <span
                  className={`block h-0.5 w-3/5 transition-transform duration-300 origin-left
                    ${isActive ? "bg-blue-500 scale-x-100" : "bg-blue-500 scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="group flex flex-col items-center text-lg"
          >
            {({ isActive }) => (
              <>
                Contact Us
                <span
                  className={`block h-0.5 w-3/5 transition-transform duration-300 origin-left
                    ${isActive ? "bg-blue-500 scale-x-100" : "bg-blue-500 scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className="group flex flex-col items-center text-lg"
          >
            {({ isActive }) => (
              <>
                About
                <span
                  className={`block h-0.5 w-3/5 transition-transform duration-300 origin-left
                    ${isActive ? "bg-blue-500 scale-x-100" : "bg-blue-500 scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </>
            )}
          </NavLink>
        </li>
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="hidden md:block bg-primary text-black px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 hover:text-white transition-colors duration-300"
      >
        Create an Account
      </button>
    </div>
  );
};

export default NavBar;
