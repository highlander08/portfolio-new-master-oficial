/** @format */

import React from "react";
import AirBnb from "../assets/airbnb.png";
import corretorImoveis from "../assets/corretor-imoveis.png";
import Timer from "../assets/timer.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const projects = [
  {
    name: " Frontend",
    title: "Timer Study",
    url: "https://ignite-timer-psi-six.vercel.app/",
    image: Timer,
  },
  {
    name: " Frontend",
    title: "Timer Study",
    url: "https://ignite-timer-psi-six.vercel.app/",
    image: Timer,
  },
  {
    name: " Frontend",
    title: "corretor de imóveis",
    url: "https://react-state-app-oficial.vercel.app/",
    image: corretorImoveis,
  },
  {
    name: " Frontend",
    title: "Viagens",
    url: "https://creative-lokum-881dbe.netlify.app/",
    image: AirBnb,
  },
  {
    name: " Frontend",
    title: "Timer Study",
    url: "https://ignite-timer-psi-six.vercel.app/",
    image: Timer,
  },
];
const projects1 = [
  {
    name: " Frontend",
    title: "Timer Study",
    url: "https://ignite-timer-psi-six.vercel.app/",
    image: Timer,
  },
  {
    name: " Frontend",
    title: "Timer Study",
    url: "https://ignite-timer-psi-six.vercel.app/",
    image: Timer,
  },
  {
    name: " Frontend",
    title: "Timer Study",
    url: "https://ignite-timer-psi-six.vercel.app/",
    image: Timer,
  },
  {
    name: " Frontend",
    title: "Timer Study",
    url: "https://ignite-timer-psi-six.vercel.app/",
    image: Timer,
  },
  {
    name: " Frontend",
    title: "Timer Study",
    url: "https://ignite-timer-psi-six.vercel.app/",
    image: Timer,
  },
];

export const Work = () => {
  return (
    <section id="work" className="section text-whiteHigh flex flex-col gap-y-3">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className=" flex flex-col mb-10 lg:mb-0 "
      >
        <div className="flex gap-x-4">
          <h2 className="h2 leading-tight text-accent">
            My Latest <br /> Work.
          </h2>
          <p className="max-w-sm mb-16">
            Trabalhei em uma variedade de projetos desafiadores, onde tive a
            oportunidade de aprimorar minhas habilidades técnica.
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto">
        <div className="flex gap-y-5 flex-col lg:flex-row gap-x-10 ">
          {projects.map(({ name, title, url, image }) => (
            <a href={url} target="_blank" rel="noreferrer" key={title}>
              <div className="space-y-3">
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 flex gap-x-2"
                >
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-[180px] h-[180px]  ">
                    <div className="highProject w-full h-full absolute z-40"></div>
                    <img
                      src={image}
                      alt=""
                      className="group-hover:scale-125 transition-all duration-300 w-full h-full bg-cover bg-center"
                    />
                    <div className="absolute  -bottom-full left-10 group-hover:bottom-24 transition-all duration-500 z-50 ">
                      <div className="high text-gradient">{name}</div>
                    </div>
                    <div className="absolute -bottom-full left-10  group-hover:bottom-7 transition-all duration-700 z-50">
                      <span className="high text-gradient ">{title}</span>{" "}
                    </div>
                  </div>
                </motion.div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="flex gap-y-5 flex-col lg:flex-row gap-x-10 ">
          {/* <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex flex-col gap-y-12 mb-10 lg:mb-0 "
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">
                Trabalhei em uma variedade de projetos desafiadores, onde tive a
                oportunidade de aprimorar minhas habilidades técnica.
              </p>
            </div>
          </motion.div> */}
          {projects1.map(({ name, title, url, image }) => (
            <a href={url} target="_blank" rel="noreferrer" key={title}>
              <div className="space-y-3">
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 flex gap-x-2"
                >
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-[180px] h-[180px]  ">
                    <div className="highProject w-full h-full absolute z-40"></div>
                    <img
                      src={image}
                      alt=""
                      className="group-hover:scale-125 transition-all duration-300 w-full h-full bg-cover bg-center"
                    />
                    <div className="absolute  -bottom-full left-10 group-hover:bottom-24 transition-all duration-500 z-50 ">
                      <div className="high text-gradient">{name}</div>
                    </div>
                    <div className="absolute -bottom-full left-10  group-hover:bottom-7 transition-all duration-700 z-50">
                      <span className="high text-gradient ">{title}</span>{" "}
                    </div>
                  </div>
                </motion.div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
