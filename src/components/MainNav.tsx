import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="flex space-x-3 lg:space-x-7  items-center">
      <a
        href="/#about"
        className="font-medium text-[#261C82] hover:text-[#8278E2] "
      >
        About
      </a>

      <a
        href="/#services"
        className="font-medium  text-[#261C82] hover:text-[#8278E2] "
      >
        Services
      </a>

      <a
        href="/#portfolio"
        className="font-medium text-[#261C82] hover:text-[#8278E2] "
      >
        Portfolio
      </a>

      <a
        href="/#testimonials"
        className="font-medium  text-[#261C82] hover:text-[#8278E2] "
      >
        Testimonials
      </a>

      <Link
        to="/blog"
        className="font-medium text-[#261C82] hover:text-[#8278E2] "
      >
        Blog
      </Link>
    </div>
  );
};

export default MainNav;
