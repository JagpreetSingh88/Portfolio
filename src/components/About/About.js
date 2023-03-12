import React from "react";
import { motion } from "framer-motion";
import { Styles } from "../styles/Style";
import Tilt from "react-tilt";
import { services } from "../Constants/Costants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:min-w-[120px] w-44">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="green-pink-gradient w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="rounded-[20px] py-5 bg-tertiary px-12 min-h-[220px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div className="text-start" variants={textVariant()} id="about">
        <p className={Styles.sectionSubText}>Introduction</p>
        <h2 className={Styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-start mt-4 text-secondary text-[17px] leading-[30px] "
      >
        I am a skilled software developer with exprerience in Javascript
        and expertise in framework like:- React,redux,three.js,node.js and
        tailwind css,bootstrap and more technologies.I am a quick learner and
        collaborate with clients to create efficient,scalable and user-friendly
        solutions that solve real world problems.lets work toegther to brinf
        great ideasto life!
      </motion.p>
      <div className="mt-20 text-white flex flex-wrap gap-10 mb-10">
        {services.map((service, id) => {
          return <ServiceCard key={service.title} index={id} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
