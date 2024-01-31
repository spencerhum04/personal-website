import React, { useEffect, useRef } from 'react';
import styles from '../style';

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
    }, 100);
  };

  useEffect(() => {
    const h1Element = h1Ref.current;

    if (h1Element) {
      startTextAnimation(); // Start animation automatically
    }
  }, []); // Removed [interval] from the dependencies array

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ml-12`}>
        <div className="flex flex-row justify-between items-center w-full mt-3">
          <h1
            ref={h1Ref}
            className="flex-1 font-mono font-black ss:text-[100px] text-[52px] text-white ss:leading-[100px] leading-[75px] flex justify-center items-center h-screen"
            data-value="SPENCER HUM"
          >
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
