import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import spotify from '../assets/spotify.jpg';
import airbnb from '../assets/airbnbapp.jpg';
import sunsquare from '../assets/sunsquare.jpg';

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:h-[40vh]"
            >
              <h2 className="h2 leading-tight text-accent">
                Mis últimos proyectos
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                provident incidunt inventore sapiente ipsum asperiores debitis
                eaque similique aliquam velit ipsa voluptatum dolorem,
                exercitationem numquam. Temporibus deleniti labore incidunt
                libero.
              </p>
              <a
                className="btn btn-lg py-2"
                href="https://github.com/martincorredor?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver todos
              </a>
            </motion.div>
            {/* Spotify */}
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-x1 projectCard"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full
              absolute z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all
              duration-500"
                src={spotify}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12
              group-hover:bottom-24 transition-all
              duration-500 z-50"
              >
                <span className="text-gradient">Frontend Development</span>
              </div>
              <div
                className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all
              duration-700 z-50"
              >
                <span className="text-3x1 text-white">Spotify Clone</span>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col gap-y-10 lg:relative ">
            {/* AirBnB */}
            <motion.div
              variants={fadeIn('left', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-x1 projectCard"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={airbnb}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12
              group-hover:bottom-24 transition-all
              duration-500 z-50"
              >
                <span className="text-gradient">Frontend Development</span>
              </div>
              <div
                className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all
              duration-700 z-50"
              >
                <span className="text-3x1 text-white">AirBnB Clone</span>
              </div>
            </motion.div>
            {/* Sunsquare */}
            <motion.div
              variants={fadeIn('left', 0.9)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-x1 projectCard"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={sunsquare}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12
              group-hover:bottom-24 transition-all
              duration-500 z-50"
              >
                <span className="text-gradient">Frontend Development</span>
              </div>
              <div
                className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all
              duration-700 z-50"
              >
                <span className="text-3x1 text-white">SunSquare</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
