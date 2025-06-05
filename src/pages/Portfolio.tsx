import nexa_iphone from "../assets/nexa-iphone.png";
import nexa_mac from "../assets/nexa-mac.png";
import mflix_mac from "../assets/mflix-mac.png";
import mflix_iphone from "../assets/mflix-iphone.png";
import orderbite_mac from "../assets/orderbite-mac.png";
import orderbite_iphone from "../assets/orderbite-iphone.png";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";

const Portfolio = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white" id="portfolio">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-[#261C82] text-center">
          Our Portfolio
        </h2>

        <div className="flex justify-center items-center gap-3">

          <div className=" w-full h-full flex flex-col md:flex-row justify-between items-center gap-4 relative my-4">

            {/* Image Container */}
            <div className="flex-[2]">
              {/* Desktop Mockup */}
            <FadeInWhenVisible direction="zoom" delay={0.4}>
              <div className="w-full h-full">
                <img
                  src={nexa_mac}
                  alt="Desktop View"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile Mockup - Positioned absolutely */}
              <div className="w-[20%] md:w-[15%] h-[100%] absolute bottom-37 md:bottom-0 left-0">
                <img
                  src={nexa_iphone}
                  alt="Mobile View"
                  className="w-full h-full object-contain"
                />
              </div>
            </FadeInWhenVisible>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
            <FadeInWhenVisible direction="right">  
              <h3 className="text-xl text-[#261C82] font-semibold mb-2">
                Nexa – AI-Powered Educational Platform
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3">
                Nexa is a smart educational platform built with AI at its core.
                It features a personalized AI assistant, session timer for
                focused learning, and a student dashboard that tracks progress
                and performance. Designed for both learners and institutions.
              </p>

              <div className="flex flex-col items-center gap-4">
                <h3 className="text-[#F25D9C] font-medium">Stack</h3>
                <div className="flex gap-4 text-start text-xs font-medium">
                  <ul>
                    <li>Firebase Auth</li>
                    <li>Geminine AI</li>
                    <li>Reat.js</li>
                    <li>TypeScript</li>
                  </ul>
                  <ul>
                    <li>Tailwind CSS,</li>
                    <li>Node.js,</li>
                    <li>Express.js</li>
                    <li>Vite</li>
                  </ul>
                </div>

                <a
                  href="Https://nexaedu.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold text-[#22C55E] hover:underline"
                >
                  Live view →
                </a>
              </div>
            </FadeInWhenVisible>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <div className=" w-full h-full flex flex-col md:flex-row justify-between items-center gap-4 relative my-4">
            {/* Image Container */}
            <div className="flex-[2]">
            <FadeInWhenVisible direction="zoom" delay={0.4}>
              {/* Desktop Mockup */}
              <div className="w-full h-full">
                <img
                  src={orderbite_mac}
                  alt="Desktop View"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile Mockup - Positioned absolutely */}
              <div className="w-[20%] md:w-[15%] h-[100%] absolute bottom-42 md:bottom-0 left-0">
                <img
                  src={orderbite_iphone}
                  alt="Mobile View"
                  className="w-full h-full object-contain"
                />
              </div>
              </FadeInWhenVisible>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
              <FadeInWhenVisible direction="left">
              <h3 className="text-xl text-[#261C82] font-semibold mb-2">
                OrderBite – Online Food Ordering Platform
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3">
                OrderBite is a user-friendly food ordering platform catering to
                both diners and restaurants. it allows customers to browse
                menus, place orders, and track deliveries in real-time. while
                restaurants manage menus and upload images. The platform also
                offers smooth sorting and filtering.
              </p>
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-[#F25D9C] font-medium">Stack</h3>
                <div className="flex gap-4 text-start text-xs font-medium">
                  <ul>
                    <li>React.js</li>
                    <li>Typescript</li>
                    <li>Stripe</li>
                    <li>Auth0</li>
                  </ul>
                  <ul>
                    <li>MongoDB</li>
                    <li>Node.js,</li>
                    <li>Tailwind</li>
                    <li>Cloudinary</li>
                  </ul>
                </div>
                <a
                  href="https://ace-bluebox-frontend.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold text-[#22C55E] hover:underline"
                >
                  Live view →
                </a>
              </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <div className=" w-full h-full flex flex-col md:flex-row justify-between items-center gap-4 relative my-4">
            {/* Image Container */}
            <div className="flex-[2]">
              <FadeInWhenVisible direction="zoom" delay={0.4}>
              {/* Desktop Mockup */}
              <div className="w-full h-full">
                <img
                  src={mflix_mac}
                  alt="Desktop View"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile Mockup - Positioned absolutely */}
              <div className="w-[20%] md:w-[15%] h-[100%] absolute bottom-37 md:bottom-0 left-0">
                <img
                  src={mflix_iphone}
                  alt="Mobile View"
                  className="w-full h-full object-contain"
                />
              </div>
              </FadeInWhenVisible>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
              <FadeInWhenVisible direction="right">
              <h3 className="text-xl text-[#261C82] font-semibold mb-2">
                MFlix – Movie Discovery Platform
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3">
                MFlix is a sleek movie discovery platform. Users can explore
                trending films, search by genre, view trailers, and access cast,
                ratings, and reviews — all in a fast, intuitive UI. It’s
                optimized for performance with future updates focused on
                boosting engagement.
              </p>

              <div className="flex flex-col items-center gap-4">
                <h3 className="text-[#F25D9C] font-medium">Stack</h3>
                <div className="flex gap-4 text-start text-xs font-medium">
                  <ul>
                    <li>Javascript</li>
                    <li>HTML</li>
                  </ul>

                  <ul>
                    <li>CSS</li>
                    <li>TMDB API</li>
                  </ul>
                </div>
                <a
                  href="https://margaret-egbe.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold text-[#22C55E] hover:underline"
                >
                  Live view →
                </a>
              </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
