import styles from '../style';
import { githublogo, linklogo, rightarrowicon } from '../assets';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ml-12`}>
      <div className="flex flex-row justify-between items-center w-full mt-3">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Hello! I'm<br className="sm:block hidden" /> {" "}
          Spencer Hum<br className="sm:block hidden" /> {" "}
          <span className="text-gradient">IM DESPERATE NEED JOB PLEASE I NEED A JOB</span>
        </h1>
      </div>
    </div>
  </section>
)

export default Hero