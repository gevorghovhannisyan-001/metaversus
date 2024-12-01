'use client';


import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative 
  z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex 
      flex-col gap-8`}
    >
    <TypingText title="| People on the World" textStyles="text-center" /> 
    <TitleText 
      title={
        <>
          Track friends around you and 
          invite them to play together in 
          the same world
        </>
      }
      textStyles="text-center"
    />

    <motion.div
      variant={fadeIn('up', 'tween', 0.3, 1)}
      className="relative mt-[68px] flex w-full
      h-[550px] "
    >
      <img
        src="/map.png"
        alt="map"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-20 right-20 
      w-[70px] h-[70px] p-[6px] rounded-full bg-
      [#5d6680]">
        <img
          src="/people-01.png" alt="people"
          className="w-full h-full" 
        />
      </div>
      <div className="absolute top-10 left-20 
      w-[70px] h-[70px] p-[6px] rounded-full bg-
      [#5d6680]">
        <img
          src="/people-02.png" alt="people"
          className="w-full h-full" 
        />
      </div>
      <div className="absolute top-1/2 left-[45%] 
      w-[70px] h-[70px] p-[6px] rounded-full bg-
      [#5d6680]">
        <img
          src="/people-03.png" alt="people"
          className="w-full h-full" 
        />
      </div>
      <div className={`absolute top-[35%] left-[15%] 
      w-[210px] h-[170px] p-[6px] rounded-[24px] 
      bg-slate-600 ${styles.flexCenter} flex-col`}>
        <img
          src="/planet-02.png" alt="planet-02"
          className="w-[90%] h-[90%] object-cover rounded-[24px]" 
        />
        <h2 className="absolute bottom-5 z-10 
        text-center text-white ">
          The Upside Down
        </h2>
        <div className="absolute bottom-[30%] z-10 flex gap-2">
          <div className="flex">
            <img
            src="/people-04.svg"
            alt="people"
            className="w-[24px] h-[24px] rounded-full -mr-3"
            />
            <img
            src="/people-05.svg"
            alt="people"
            className="w-[24px] h-[24px] rounded-full -mr-3"
            />
            <img
            src="/people-06.svg"
            alt="people"
            className="w-[24px] h-[24px] rounded-full"
            />
          </div>
          <p className="text-white text-sm leading-6">
            +264 has joined
          </p>
        </div>
      </div>
      <div className={`absolute top-[35px] right-[15%] 
      w-[210px] h-[170px] p-[6px] rounded-[24px] 
      bg-slate-600 ${styles.flexCenter} flex-col`}>
        <img
          src="/planet-10.svg" alt="planet-05"
          className="w-[90%] h-[90%] object-cover rounded-[24px]" 
        />
        <h2 className="absolute bottom-5 z-10 
        text-center text-white ">
          Hawkins Labs
        </h2>
        <div className="absolute z-10 bottom-[30%] flex gap-2">
          <div className="flex">
            <img
            src="/people-04.svg"
            alt="people"
            className="w-[24px] h-[24px] rounded-full -mr-3"
            />
            <img
            src="/people-05.svg"
            alt="people"
            className="w-[24px] h-[24px] rounded-full -mr-3"
            />
            <img
            src="/people-06.svg"
            alt="people"
            className="w-[24px] h-[24px] rounded-full"
            />
          </div>
          <p className="text-white text-sm leading-6">
            +264 has joined
          </p>
        </div>
      </div>
    </motion.div>

    </motion.div>
  </section>
);

export default World;