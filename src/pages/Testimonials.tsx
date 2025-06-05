import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Rating from "@mui/material/Rating";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";

const testimonials = [
  {
    name: "Emmanuel M.",
    role: "Operations Manager, SwiftMed",
    text: "They delivered beyond our vision. From design to deployment, the experience was seamless. We're thrilled with the final product.",
    rating: 5,
  },
  {
    name: "Chisom O.",
    role: "CEO Chigalleria",
    text: "Our new site is intuitive, lightning-fast, and mobile-optimized. We've seen a significant boost in user engagement since launch.",
    rating: 5,
  },
  {
    name: "Paul P.",
    role: "Marketing Lead, GlowMart",
    text: "They took time to understand our goals and translated them into a beautiful, functional platform. Excellent communication and timely delivery.",
    rating: 5,
  },
  {
    name: "Amina F.",
    role: "Student, Noun",
    text: "Their expertise in education platforms is unmatched. They built a reliable system that students love. The AI integration blew us away!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#261C82]">
          Testimonials
        </h2>
      </div>

      <FadeInWhenVisible>
        <div className="bg-[#3F3ABD] text-white py-12 px-4 mb-16">
          <p className="text-md font-bold text-center mb-8">
            What Our Lovely Clients Say About <br></br>MegTech
          </p>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop
            className="max-w-2xl mx-auto testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-amber-950 rounded-2xl shadow-xl p-6 transition-all duration-500">
                  <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                  <Rating
                    name={`rating-${index}`}
                    value={testimonial.rating}
                    readOnly
                    precision={0.5}
                    className="mb-4"
                  />
                  <div className="text-right">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm opacity-70">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .testimonial-swiper .swiper-pagination-bullet {
              background-color: #f9c5d8;
              opacity: 1;
            }
            .testimonial-swiper .swiper-pagination-bullet-active {
              background-color: #f25d9c;
            }
          `}</style>
        </div>
      </FadeInWhenVisible>
    </>
  );
};

export default Testimonials;
