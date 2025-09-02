"use client";
import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";

const navLinks = [
  { id: 1, children: "Home", path: "/" },
  { id: 2, children: "Blogs", path: "/blogs" },
];

function Header() {
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-lg
                       bg-gradient-to-r from-primary-50/80 to-primary-100/80
                       border-b-2 border-secondary-300 shadow-lg transition-all duration-300  ${
                         isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
                       }`}
    >
      <nav className="container xl:max-w-screen-xl mx-auto flex flex-row items-center justify-between py-4 px-6 md:px-0">
        {/* Logo */}
        <div className="text-primary-700 font-extrabold text-lg md:text-2xl drop-shadow-md">
          LOGO
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-row flex-wrap items-center gap-x-6 md:gap-x-8 text-secondary-400 font-medium">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink
                path={navLink.path}
                className="relative text-secondary-400 hover:text-primary-700 transition-colors
                           after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                {navLink.children}
              </NavLink>
            </li>
          ))}
          <li>
            {user ? (
              <NavLink
                path="/profile"
                className="ml-4 text-primary-500 font-semibold hover:text-primary-700 transition-colors"
              >
                Profile
              </NavLink>
            ) : (
              <NavLink
                path="/signin"
                className="ml-4 text-primary-500 font-semibold hover:text-primary-700 transition-colors"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
