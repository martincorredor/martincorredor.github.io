import React from 'react';

import profile from '../assets/profileBetter.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center 
        lg:gap-x-12"
        >
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[35px] font-bold leading-[0.8] lg:text-[50px]"
            >
              MARTIN <span>CORREDOR</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[25px] lg:text-[30px] font-secondary 
              font-semibold uppercase leading-[1]"
            >
              {/* <span className=" text-white mr-2">Soy</span> */}
              <TypeAnimation
                sequence={[
                  'Desarrollador',
                  2000,
                  'Diseñador',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Desarrollador Frontend con mas de dos años de experiencia.
              Apasionado en todo lo que hago, dispuesto siempre a enfrentar
              nuevos desafíos. Amante por el uso de tecnologías web modernas
              para hacer realidad ideas audaces.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-8
            mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Descargar CV</button>
              <a href="#" className="text-gradient btn-link">
                Mi portafolio
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0"
            >
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={profile} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;