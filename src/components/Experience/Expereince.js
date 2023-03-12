import React from "react";
import { motion } from "framer-motion";
import { Styles } from "../styles/Style";
import { technologies } from "../Constants/Costants";
import { SectionWrapper } from "../hoc";
import BallCanvas from "../canvas/Ball";

const Expereince = () => {
  return (
    <>
      <motion.div id="technology">
        <p className={Styles.heroSubText}>Technologies I work upon!</p>
        <h3 className={Styles.heroHeadText}>
          <span className="text-purple-700">Lets Play</span> with{" "}
          <span className="text-purple-700">3D</span> view of Tech
        </h3>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => {
          return (
            <div className="w-28 h-48" key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Expereince, "work");
