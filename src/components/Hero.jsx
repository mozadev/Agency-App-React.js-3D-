import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { EarthCanvas } from './canvas';
import { slideIn } from "../utils/motion";
import { SectionWrapper } from '../hoc';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Cesar Moza</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            I'm a full-stack web developer building interactive, 
            reliable apps with React  and Python (FastAPI/Django).
             I focus on clean architecture, secure REST APIs
            (JWT, pagination, validation) and data-driven features.
            and Git.<br className='sm:block hidden' />
          </p>
        </div>
      </div>
    </section>
  );
};

// export default Hero;
export default SectionWrapper(Hero, "hero");