import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className="py-16 lg:section " id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className="">
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                Contáctame
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Vamos a trabajar juntos!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="formContainer flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start"
            action=""
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full 
              placeholder:text-white focus:border-accent transition-all"
              placeholder="Tu nombre"
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full 
              placeholder:text-white focus:border-accent transition-all"
              placeholder="Tu email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full 
              placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Tu mensaje"
            ></textarea>
            <button className="btn btn-lg">Enviar</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
