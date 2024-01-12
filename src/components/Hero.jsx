import styles from '../style';
import { schoollogo, githublogo, linklogo, rightarrowicon } from '../assets';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[12px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={schoollogo} className="w-[32px] h-[40px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Software</span> Design
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full mt-3">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Spencer Hum<br className="sm:block hidden" /> {" "}
          <span className="text-gradient">Computer Science Student</span>
        </h1>
        <div className="absolute z-[3] -left-1 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      </div>

      <div className="mt-8 flex">
        <Link to="/Resume - Spencer Hum.pdf" download className="bg-cyan-300 hover:bg-cyan-400 text-black font-bold py-4 px-8 rounded-lg flex justify-center items-center mr-4">
          <span>Resume / CV</span>
          <img src={rightarrowicon} className="w-4 h-4 ml-6 flex" />
        </Link>
        <a href="https://github.com/spencerhum04" target="_blank" rel="noopener noreferrer" className="bg-cyan-300 hover:bg-cyan-400 border border-cyan-200 hover:border-transparent py-4 px-4 rounded-lg mr-4">
          <img src={githublogo} className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/spencer-hum/" target="_blank" rel="noopener noreferrer" className="bg-cyan-300 hover:bg-cyan-400 border border-cyan-200 hover:border-transparent py-4 px-4 rounded-lg mr-4">
          <img src={linklogo} className="w-6 h-6" />
        </a>
      </div>
    </div>

  </section>
)

export default Hero