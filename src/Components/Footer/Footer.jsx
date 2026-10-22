import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500">
                <ShoppingBag size={25} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                SHOP<span className="text-indigo-400">.CO</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-blue-100/70">
              Discover your style with our collection of quality products.
              Shop your favorites and enjoy a simple, convenient shopping
              experience.
            </p>

           <div className="mt-6 flex gap-3">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 font-bold transition hover:bg-indigo-500"
  >
    f
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:bg-indigo-500"
  >
    I
  </a>

  <a
    href="https://github.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 font-bold transition hover:bg-indigo-500"
  >
    GH
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-blue-100/70">
              <li>
                <Link to="/" className="transition hover:text-indigo-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition hover:text-indigo-300">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-indigo-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-indigo-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/cart" className="transition hover:text-indigo-300">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Customer Support</h3>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li>
                <Link to="/contact" className="transition hover:text-indigo-300">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:support@example.com" className="transition hover:text-indigo-300">
                  Email Support
                </a>
              </li>
              <li>
                <Link to="/shipping" className="transition hover:text-indigo-300">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="transition hover:text-indigo-300">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition hover:text-indigo-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Get in Touch</h3>

            <div className="space-y-4 text-sm text-blue-100/70">
              <p className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                <a
                  href="mailto:support@example.com"
                  className="transition hover:text-indigo-300"
                >
                  support@example.com
                </a>
              </p>

              <p className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                <a href="tel:+923001234567" className="transition hover:text-indigo-300">
                  +92 300 1234567
                </a>
              </p>

              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                <span>Your City, Pakistan</span>
              </p>
            </div>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold transition hover:bg-indigo-400"
            >
              Explore Products
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-blue-100/60 md:flex-row md:text-left">
            <p>
              © {new Date().getFullYear()} SHOP.CO. All rights reserved.
            </p>

            <p>
              Made with <span className="text-pink-400">♥</span> for a better
              shopping experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
