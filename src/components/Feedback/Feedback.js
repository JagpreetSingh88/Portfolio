import React from "react";
import { motion } from "framer-motion";
import { Styles } from "../styles/Style";
import { testimonials } from "../Constants/Costants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full lg:w-1/4 md:w-[230px]"
    >
      <p className="text-white tracking-wider font-black text-[48px]">"</p>
      <div className="mt-1">
        <p>{testimonial}</p>
        <div className="mt-7 flex justify-between text-center gap-1">
          <div className="flex-1 flex flex-col text-left">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback by ${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedback = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]" id="feedback">
      <div
        className={`${Styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={Styles.heroSubText}>WHAT OTHER SAYS</p>
          <h3 className={Styles.heroHeadText}>Testimonials.</h3>
        </motion.div>
      </div>
      <div className={`${Styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => {
          return (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedback, "Feedback");
