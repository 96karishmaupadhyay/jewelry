import { LogIn, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Login", icon: LogIn, href: "/login" },
  { name: "Wishlist", icon: Heart, href: "/wishlist" },
  { name: "Checkout", icon: ShoppingCart, href: "/checkout" },
];

export default function Navbar() {
  const extraLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collection", href: "/collection" },
    { name: "Product", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className=" text-secondary shadow-md fixed top-0 z-10 bg-none w-full bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between  items-center h-20">
          {/* Brand / Logo */}
          <Link to="/" className="text-2xl font-bold">
            Jewelry
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            {extraLinks.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                className="relative px-3 py-2 rounded transition group"
              >
                <span className="relative z-10">{name}</span>
                <span
                  className="absolute left-0 bottom-1 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  aria-hidden="true"
                ></span>
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ name, icon: Icon, href }) => (
              <Link
                key={name}
                to={href}
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-secondary hover:text-primary transition"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}

// Mobile Menu
function MobileMenu({ navItems }) {
  const [open, setOpen] = useState(false);

  const extraLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collection", href: "/collection" },
    { name: "Product", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <button
        className="text-secondary focus:outline-none top-0 z-10 bg-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-primary text-secondary rounded shadow-lg py-4 z-50">
          {/* Extra Links */}
          {extraLinks.map(({ name, href }) => (
            <Link
              key={name}
              to={href}
              className="block px-6 py-2 hover:bg-secondary hover:text-primary transition"
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          ))}

          <div className="border-t border-secondary my-2"></div>

          {/* Auth/Cart Links */}
          {navItems.map(({ name, icon: Icon, href }) => (
            <Link
              key={name}
              to={href}
              className="flex items-center gap-2 px-6 py-2 hover:bg-secondary hover:text-primary transition"
              onClick={() => setOpen(false)}
            >
              <Icon className="w-5 h-5" />
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
