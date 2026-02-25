import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

const TechCard = ({ technology, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.08, 0.7)}
    className="group relative flex flex-col items-center justify-center w-full max-w-[190px] rounded-2xl bg-gradient-to-br from-night via-jet to-eerieBlack p-[1px] shadow-card hover:shadow-cardLight transition-shadow duration-300"
  >
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-jetLight/80 px-6 py-6 backdrop-blur-xl">
      <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(244,244,246,0.35),_transparent_60%)]" />
      <img
        src={technology.icon}
        alt={technology.name}
        className="relative z-[1] h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(244,244,246,0.25)]"
      />
      <p className="relative z-[1] text-[15px] font-semibold uppercase tracking-[0.16em] text-timberWolf font-poppins text-center">
        {technology.name}
      </p>
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My toolbox</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies I use.</h2>
      </motion.div>

      <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} technology={technology} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
