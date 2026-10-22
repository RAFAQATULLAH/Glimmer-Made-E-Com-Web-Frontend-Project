
import Logo from "../../assets/Images/Logo.png";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, ShoppingCart } from "lucide-react";

const links = [
  { to: "/products/", label: "Products" },
  { to: "/about/", label: "About" },
  { to: "/contact/", label: "Contact" },
];

const desktopLink = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive
      ? "bg-sky-500 text-blue-950"
      : "text-blue-100 hover:bg-blue-900 hover:text-white"
  }`;

const mobileLink = ({ isActive }) =>
  `block px-4 py-3 text-base font-medium border-b border-blue-900 ${
    isActive
      ? "bg-blue-900 text-sky-300"
      : "text-blue-100 hover:bg-blue-900/60"
  }`;

const iconBtn =
  "p-2 rounded-md text-blue-100 hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-sky-400";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-950 border-b border-blue-900 px-4 lg:px-6 rounded-b-xl">
      {/* Mobile bar (below lg) */}
      <nav className="lg:hidden flex items-center justify-between py-3">
        <button
          onClick={() => setMenu((open) => !open)}
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          className={iconBtn}
        >
          {menu ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/" onClick={closeMenu}>
          <img src={Logo} alt="Logo" className="h-9 w-auto" />
        </Link>

        <Link to="/cart/" onClick={closeMenu} aria-label="Cart" className={iconBtn}>
          <ShoppingCart size={24} />
        </Link>
      </nav>

      {/* Mobile dropdown */}
      {menu && (
        <div className="lg:hidden pb-3 -mx-4">
          <NavLink to="/" onClick={closeMenu} className={mobileLink}>
            Home
          </NavLink>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={closeMenu} className={mobileLink}>
              {label}
            </NavLink>
          ))}
          <div className="px-4 pt-4">
            <Link
              to="/login/"
              onClick={closeMenu}
              className="block w-full text-center rounded-md bg-sky-500 px-4 py-2.5 font-semibold text-blue-950 hover:bg-sky-400"
            >
              Login
            </Link>
          </div>
        </div>
      )}

      {/* Desktop bar (lg and up) */}
      <nav className="hidden lg:flex items-center justify-between py-3">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        <div className="flex items-center gap-1">
          <NavLink to="/" aria-label="Home" className={desktopLink}>
            <Home size={20} />
          </NavLink>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={desktopLink}>
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/cart/" aria-label="Cart" className={iconBtn}>
            <ShoppingCart size={22} />
          </Link>
          <Link
            to="/login/"
            className="rounded-md bg-sky-500 px-5 py-2 text-sm font-semibold text-blue-950 hover:bg-sky-400 transition-colors"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;