import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InsightsIcon from "@mui/icons-material/Insights";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import support from "../assets/support.webp";
import colab from "../assets/colab.webp";
import purpose from "../assets/purpose.webp";
import StaggeredList from "@/components/animations/StaggeredList";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";

const services = [
  {
    icon: <DesignServicesIcon fontSize="inherit" />,
    title: "UI/UX Design",
    desc: "Clean, intuitive interfaces that engage users and elevate your digital presence.",
  },
  {
    icon: <CodeIcon fontSize="inherit" />,
    title: "Web Development",
    desc: "Robust, scalable websites and web apps using modern technologies tailored for performance.",
  },
  {
    icon: <PhoneIphoneIcon fontSize="inherit" />,
    title: "Mobile Optimization",
    desc: "Ensure seamless experience across all devices with fully responsive mobile-first design.",
  },
  {
    icon: <InsightsIcon fontSize="inherit" />,
    title: "Brand Strategy",
    desc: "Craft a unique brand identity and voice that resonates with your audience and builds loyalty.",
  },
  {
    icon: <TrendingUpIcon fontSize="inherit" />,
    title: "SEO Services",
    desc: "Boost your visibility on search engines with modern SEO tactics that drive organic traffic.",
  },
  {
    icon: <BuildCircleIcon fontSize="inherit" />,
    title: "Web Maintenance",
    desc: "Keep your site running smoothly with performance monitoring and timely updates.",
  },
];

const Services = () => {
  return (
    <>
      <section className="py-16 bg-white px-5 md:px-20" id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#261C82]">
            Our Services
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            At MegTech, we deliver professional and scalable digital solutions
            tailored to your brand’s growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggeredList>
            {services.map((service, i) => (
              <FadeInWhenVisible key={i}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
                  <div className="text-4xl text-[#8278E2] mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg text-[#261C82] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">{service.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section>
        <div className="bg-gradient-to-r from-[#5A4FDB] to-[#3F3ABD] mx-auto text-center p-3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fff] mb-4 mt-3">
            What Makes Us Different
          </h2>
          <p className="text-[#fff] mb-6 max-w-3xl mx-auto">
            We craft purposeful websites with clean design, solid code, and a heart for collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20 py-12">
          {[support, colab, purpose].map((img, i) => {
            const titles = [
              "Reliable Support",
              "Collaborative Process",
              "Purpose-Driven Design",
            ];
            const descs = [
              "From updates to maintenance, we offer dependable support even after launch.",
              "We listen, adapt, and co-create — ensuring you feel heard every step of the way.",
              "Every detail is thoughtfully crafted to reflect your brand’s identity and mission.",
            ];

            return (
              <FadeInWhenVisible key={i}>
                <div className="bg-white max-w-sm mx-auto rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
                  <img src={img} alt={titles[i]} className="w-full h-48 object-cover" />
                  <div className="p-6 text-center">
                    <h2 className="text-xl font-semibold text-[#261C82] mb-2">{titles[i]}</h2>
                    <p className="text-gray-600 text-sm">{descs[i]}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
