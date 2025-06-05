import hero from "../assets/hero.webp";
import { FadeInWhenVisible } from "./animations/FadeInWhenVisible";

const Hero = () => {
  return (
    <>
      <FadeInWhenVisible>
        <div
          style={{ backgroundImage: `url(${hero})` }}
          className="bg-cover h-[40vh] md:h-[80vh] flex items-center justify-center text-white"
        >
          <div className=" bg-black/50 p-8 rounded-lg text-center">
            <h1 className="text-4xl font-bold">
              We Design. We Build. We Launch.
            </h1>
            <p className="mt-4 text-lg">
              From MVP to market — we turn your vision into a product users
              love.
            </p>
          </div>
        </div>

        <div className="relative -mt-10 md:-mt-16  z-10 px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-xl shadow-lg">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-5 shadow-md text-center hover:shadow-xl transition-all">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-bold text-[#261C82]">How We Work</h3>
              <p className="text-gray-500 text-sm">
                From concept to launch, we ensure every step is smooth and
                efficient.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-5 shadow-md text-center hover:shadow-xl transition-all">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-[#261C82]">Fast Turnaround</h3>
              <p className="text-gray-500 text-sm">
                Get your site up and running within 2-3 weeks — no delays, no
                stress.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-5 shadow-md text-center hover:shadow-xl transition-all">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-[#261C82]"> Client Support</h3>
              <p className="text-gray-500 text-sm">
                We’re here 24/7 — from kickoff to launch, you’re never alone in
                the process.
              </p>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </>
  );
};

export default Hero;
