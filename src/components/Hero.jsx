import React, { useEffect, useRef } from 'react';
import styles from '../style';
import { comp } from '../assets';

const Hero = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const h1Ref = useRef(null);
  let interval = null;

  const startTextAnimation = () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      h1Ref.current.innerText = h1Ref.current.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return h1Ref.current.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= h1Ref.current.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const h1Element = h1Ref.current;

    // Animation begins as soon as the website loads
    if (h1Element) {
      startTextAnimation();
    }
  }, []);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ml-12`}>
        <div className="flex flex-col justify-between items-center w-full mt-3">
          <h1
            ref={h1Ref}
            className="flex-1 font-mono font-black ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] flex justify-center"
            data-value="SPENCER HUM"
          >
          </h1>
          <img src={comp} className="w-495 h-286 mt-20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
