import { useEffect, lazy } from "react";
import { useLocation } from "react-router-dom";
import CallMadeIcon from "@mui/icons-material/CallMade";
import hero from "../assets/hero.webp";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";

// Lazy-loaded components
const Services = lazy(() => import("./Services"));
const Portfolio = lazy(() => import("./Portfolio"));
const Testimonials = lazy(() => import("./Testimonials"));
const Contact = lazy(() => import("./Contact"));

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* About Section */}
      <section id="about" className="bg-white py-16 px-5 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <FadeInWhenVisible direction="zoom" delay={0.4}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#261C82] mb-4">
                About MegTech
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                At <span className="font-semibold text-[#5A4FDB]">MegTech</span>, we specialize in building clean,
                scalable, and user-focused web experiences that not only look beautiful, but also solve real problems.
                <br />
                <br />
                From simple websites to full-scale applications, our mission is to craft purposeful solutions with
                modern design, reliable code, and a focus on user engagement. We believe technology should work for you
                — not the other way around.
              </p>

              <a
                href="#contact"
                className="inline-flex bg-gradient-to-r from-[#8278E2] to-[#5A4FDB] text-white px-6 py-3 rounded-md font-medium hover:from-[#5A4FDB] hover:to-[#3F3ABD] transition items-center gap-2"
              >
                Let’s Work Together
                <CallMadeIcon className="!w-5 !h-5" />
              </a>
            </div>
          </FadeInWhenVisible>

          {/* Image Placeholder */}
          <FadeInWhenVisible>
            <div className="flex justify-center md:justify-end">
              <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg border-4 border-[#F25D9C]">
                <img src={hero} alt="Margaret Egbe" className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

         <Services />
     

         <Portfolio />
     

       <Testimonials />
         <Contact />
      
    </>
  );
};

export default HomePage;
