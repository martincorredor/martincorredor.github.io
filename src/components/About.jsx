import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import aboutImg from '../assets/aboutImg.png';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row
        lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          {/* Img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain 
          bg-no-repeat h-[450px] mix-blend-lighten bg-top"
          />
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Un poco más sobre mí.</h2>
            <p className="mb-6">
              Soy <span className="text-gradient">Martin</span>, un hombre
              apasionado con todo lo que hago en el mundo tech, egresado de
              Holberton School como{' '}
              <span className="text-gradient">
                Full stack Software Developer
              </span>
              . Tengo estudios en ingeniería civil.
            </p>
            <p className="mb-6">
              Por mi versatilidad y ganas de asumir nuevos retos es que hice
              match con este carrera, porque nos obliga a estar en constante
              aprendizaje. Soy perseverante y siempre busco dar el mejor
              rendimiento manteniendo una actitud positiva, optimista y alegre.
            </p>
            <div
              className="flex max-w-max gap-x-6 items-center mb-8
            mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Descargar CV</button>
              <a href="#" className="text-gradient btn-link">
                Mi portafolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
