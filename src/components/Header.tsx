import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import EmailIcon from "@mui/icons-material/Email";

const Header = () => {
  return (
    <div className="py-3 bg-white shadow-md sticky top-0 z-50">
      <div className="px-3 md:px-16 flex justify-between items-center w-full ">
        {/* MOBILE VIEW: logo + contact + hamburger */}
        <div className="flex items-center justify-between w-full md:hidden">
          {/* Logo */}
          <Link to="/#">
            <div className="flex items-center gap-2">
              <span className="p-[2px] bg-gradient-to-l from-purple-500 to-indigo-500 rounded-full">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-full"
                />
              </span>
              <span className="text-sm text-[#3F3ABD] font-bold">MegTech</span>
            </div>
          </Link>

          <div className="flex items-center space-x-3">
            {/* Contact Button */}
            <a
              href="#contact"
              className="font-bold text-white px-5 py-2 rounded-md 
                   bg-gradient-to-r from-[#8278E2] to-[#5A4FDB] 
                   hover:from-[#5A4FDB] hover:to-[#3F3ABD] 
                   transition-colors duration-300 flex items-center gap-2"
            >
              Contact
              <EmailIcon className="!w-5 !h-5" />
            </a>

            {/* Hamburger Menu */}
            <MobileNav />
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-between items-center w-full">
          {/* Logo */}
          <a href="/#">
            <div className="flex items-center gap-2">
              <span className="p-[2px] bg-gradient-to-l from-purple-500 to-indigo-500 rounded-full">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-full"
                />
              </span>
              <span className="text-sm text-[#3F3ABD] font-bold hidden lg:block">
                MegTech
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <MainNav />

          {/* Contact Button */}
          <a
            href="#contact"
            className="font-bold text-white px-5 py-2 rounded-md 
                   bg-gradient-to-r from-[#8278E2] to-[#5A4FDB] 
                   hover:from-[#5A4FDB] hover:to-[#3F3ABD] 
                   transition-colors duration-300 flex items-center gap-2"
          >
            Contact
            <EmailIcon className="!w-5 !h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
