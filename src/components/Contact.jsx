import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';

const Contact = () => {
  const refForm = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = 'service_ushjz3i';
    const templateId = 'template_wyw6ucn';
    const apikey = '1Eu_9SzwuFv9xzDW5';
    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        refForm.current.reset();
        alert(
          'Tu mensaje fue enviado, muy pronto me contactaré contigo, lindo día'
        );
      })
      .catch((error) =>
        alert(
          'Hubo un error enviando tu mensaje, puedes intentarlo de nuevo porfa, me gustaría ponerme en contacto contigo'
        )
      );
  };

  return (
    <section className="py-32 lg:section" id="contact">
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
            className="formContainer flex-1 border rounded-2x1 flex 
            flex-col gap-y-6 pb-24 p-6 items-start"
            action=""
            onSubmit={handleSubmit}
            ref={refForm}
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full 
              placeholder:text-white focus:border-accent transition-all"
              placeholder="Tu nombre"
              id="name"
              name="name"
              required
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full 
              placeholder:text-white focus:border-accent transition-all"
              placeholder="Tu email"
              name="email"
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full 
              placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Tu mensaje"
              type="text"
              name="message"
              required
            ></textarea>
            <button className="btn btn-lg" type="submit">
              Enviar
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
