"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills1 = [
  { name: "React.js", logo: "/logos/react.png", width: 90, height: 90 },
  { name: "Next.js", logo: "/logos/next.png", width: 180, height: 180 },
  { name: "Node.js", logo: "/logos/n1.png", width: 100, height: 100},
  {
    name: "Express.js",
    logo: "/logos/express.png",
    width: 80,
    height: 80,
  },
  {
    name: "MongoDB",
    logo: "/logos/mongodb1.png",
    width: 90,
    height: 90
  },
  {
    name: "Vercel",
    logo: "/logos/vercel.png",
    width: 300,
    height: 300
  },
];

const skills2 = [
  {
    name: "JavaScript",
    logo: "/logos/javascript.png",
    width: 160,
    height: 160
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/tailwindcs.png",
    width: 90,
    height: 90,
  },
  { name: "Bootstrap", logo: "/logos/bootstrap.png", width: 90, height: 90 },
  { name: "HTML", logo: "/logos/html.png", width: 70, height: 70 },
  { name: "CSS", logo: "/logos/css.png", width: 70, height: 70 },
  {
    name: "GitHub",
    logo: "/logos/github.png",
    width: 100,
    height: 100,
    mt: 8,
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-linear-to-r from-amber-400 to-amber-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Tech <span className="text-gray-600">Stack</span>
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-gray-400 to-gray-600 mx-auto mb-12"></div>
        {/* Row 1 */}
        <Swiper
          modules={[Autoplay]}
          loop
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
    1024: { slidesPerView: 5 }, // lg
    768: { slidesPerView: 4 },  // md
    480: { slidesPerView: 3 },  // sm
    375: {slidesPerView: 2},
    320: {slidesPerView: 1},
  }}
  slidesPerView={3} // default for very small screens
          className="mb-10"
        >
          {skills1.map((skill) => (
            <SwiperSlide key={skill.name} className="flex justify-center">
              <div className="h-40 w-40 flex flex-col items-center bg-black/30 rounded-2xl border border-gray-700 backdrop-blur-md p-4">
                {/* Logo wrapper (fixed height, centered) */}
                <div className="h-24 w-full flex justify-center items-center">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                    className="object-contain"
                  />
                </div>

                {/* Fixed position name */}
                <p className="text-gray-200 font-medium text-sm mt-3">
                  {skill.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 2 */}
        <Swiper
  modules={[Autoplay]}
  loop
  speed={3000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: false,
  }}
  breakpoints={{
    1024: { slidesPerView: 5 }, // lg
    768: { slidesPerView: 4 },  // md
    480: { slidesPerView: 3 },  // sm
    375: {slidesPerView: 2},
    320: {slidesPerView: 1},
  }}
  slidesPerView={3} // default for very small screens
>
          {skills2.map((skill) => (
            <SwiperSlide
              key={`row2-${skill.name}`}
              className="flex justify-center"
            >
              <div className="h-40 w-40 flex flex-col items-center justify-center bg-black/30 rounded-2xl border border-gray-700 backdrop-blur-md">
                {/* Logo wrapper (fixed height, centered) */}
                <div className="h-24 w-full flex justify-center items-center">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                    className="object-contain"
                  />
                </div>

                {/* Fixed position name */}
                <p className="text-gray-200 font-medium text-sm mt-3">
                  {skill.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
