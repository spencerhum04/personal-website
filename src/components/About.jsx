import styles, { layout } from '../style';
import { useState } from 'react'
import { downarrowicon, rightarrowicon, linklogo, githublogo, mirror } from '../assets';

const About = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <div className="flex justify-center items-center">
          <img src={downarrowicon} className={`w-5 h-3 flex transform transition ease-in-out duration-500 cursor-pointer mt-28 ${toggle ? '' : '-rotate-90'}`} onClick={handleClick} />
          <h2 className={`text-[25px] text-gray-300 ml-6 flex mt-28`}>&lt;about&gt;</h2>
        </div>

        {/* Toggle to load about */}
        {toggle && (
          <div className="flex ml-20 mt-6">
            <div className="w-3/5">
              <p className={`${styles.paragraph} text-gray-300`}>Hello there! My name is Spencer Hum, a second-year computing student at Queen's University. I am currently pursuing my computer science education in its school of computing, where I am enrolled in the Software Design specialization. I've always been fascinated by technology and the possibilities it offers. As I continue my education, I'm constantly honing my skills while immersed in the realm of programming. Outside of the lecture halls, I enjoy coding projects, going to the gym, and playing sports.</p>
              <div className="flex flex-row mt-6">
                <div className="mt-8 flex">
                  <a href="/Spencer Hum - Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-4 px-8 rounded-lg flex justify-center items-center mr-4">
                    <span>Resume / CV</span>
                    <img src={rightarrowicon} className="w-4 h-4 ml-6 flex" />
                  </a>
                  <a href="https://github.com/spencerhum04" target="_blank" rel="noopener noreferrer" className="bg-gray-300 hover:bg-gray-400 border border-gray-200 hover:border-transparent py-4 px-4 rounded-lg mr-4">
                    <img src={githublogo} className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/spencer-hum/" target="_blank" rel="noopener noreferrer" className="bg-gray-300 hover:bg-gray-400 border border-gray-200 hover:border-transparent py-4 px-4 rounded-lg mr-4">
                    <img src={linklogo} className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <img src={mirror} className="w-[310px] h-[350px] ml-16" />
          </div>
        )}
      </div>
    </section>
  )
}

export default About;
