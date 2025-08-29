// Footer.jsx
import React from "react";
import { Facebook, Instagram, Twitter} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-secondary pt-16 px-6 pb-6 md:px-16 relative mb-0  bg-amber-100">
      {/* Decorative Floating Circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="animate-bounce-slow w-6 h-6 bg-primary rounded-full absolute top-10 left-20 opacity-30"></div>
        <div className="animate-bounce-slow w-4 h-4 bg-primary rounded-full absolute top-40 left-80 opacity-30"></div>
        <div className="animate-bounce-slow w-5 h-5 bg-primary rounded-full absolute top-72 left-1/2 opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-secondary">Nuitech Jewelry</h2>
          <p className="text-secondary">
            Premium handcrafted jewelry made with love and attention to detail.
            Shine bright with elegance and style.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-secondary mb-4">Quick Links</h3>
          <ul className="space-y-2 text-secondary">
            <li className="hover:text-primary transition-colors cursor-pointer">Home</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Collections</li>
            <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
            <li className="hover:text-primary transition-colors cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-secondary mb-4">Customer Service</h3>
          <ul className="space-y-2 text-secondary">
            <li className="hover:text-primary transition-colors cursor-pointer">Shipping & Delivery</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Returns & Exchanges</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-secondary mb-4">Subscribe</h3>
          <p className="text- text-secondary">
            Sign up for our newsletter to get the latest updates and exclusive offers.
          </p>
          <div className="flex gap-2 border-1 border-secondary rounded-sm">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg focus:outline-none text-secondary "
            />
            <button className="bg-primary px-4 py-2  font-semibold hover:bg-secondary hover:text-primary transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-center text-secondary text-sm mb-0">
        &copy; {new Date().getFullYear()}  Jewelry. All rights reserved.
      </p>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer;
