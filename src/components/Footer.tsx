import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { LinkedIn, WhatsApp, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <div className="bg-[#261C82] py-8 px-4 md:px-16"   >

        <div className="bg-white/10 backdrop-blur-md border-t border-white/20 shadow-xl py-10 px-4 md:px-16 rounded-3xl text-white flex flex-col items-center">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <span className="p-[2px] bg-gradient-to-tr from-[#F472B6] to-[#C084FC] rounded-full">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-full"
                />
              </span>
              <span className="text-sm font-bold">MegTech</span>
            </div>
            <span className="text-sm text-gray-200 mt-2">
              Building clean, scalable web experiences <br /> with purpose.
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-[#F25D9C] font-bold mb-2">Quick Links</h2>
            <div className="flex flex-col gap-1 text-sm text-white/90">
              <a href="#about" className="underline">About</a>
              <a href="#services" className="underline">Services</a>
              <a href="#portfolio" className="underline">Portfolio</a>
              <a href="#testimonials" className="underline">Testimonials</a>
              <Link to="/blog" className="underline">Blog</Link>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h2 className="font-bold mb-2 text-[#F25D9C]">Contact</h2>
            <div className="flex flex-col gap-2 text-sm text-white/90">
              <a
                href="https://www.linkedin.com/in/margaret-egbe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <LinkedIn fontSize="small" /> LinkedIn
              </a>

              <a
                href="https://wa.me/2347068081317"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <WhatsApp fontSize="small" /> WhatsApp
              </a>

              <a href="tel:+2347068081317" className="flex items-center gap-2">
                <Phone fontSize="small" /> +234 706 808 1317
              </a>
            </div>
          </div>
          </div>

          <p className="text-pink-400 font-medium mt-15 text-sm"> &copy; {new Date().getFullYear()} MegTech. All rights reserved.
          </p>
      </div>
    
      </div>
    </>
  );
};

export default Footer;
