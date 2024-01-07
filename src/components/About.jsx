import styles, { layout } from '../style';
import { badmintonclublogo, climbingclublogo, moi } from '../assets';

const About = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} underline decoration-cyan-300`}>About Me</h2>
        <p className={`${styles.paragraph} max-w-[600px]`}>Hello there! My name is Spencer Hum, a second-year computing student at Queen's University. I am currently pursuing my computer science education in its school of computing, where I am enrolled in the Software Design specialization. I've always been fascinated by technology and the possibilities it offers. As I continue my education, I'm constantly honing my skills while immersed in the realm of programming. Outside of the lecture halls, I enjoy coding projects and playing sports.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={badmintonclublogo} className="w-[100px] h-[100px] rounded-full border border-cyan-400 border-[2px] ml-20" />
          <img src={climbingclublogo} className="w-[100px] h-[100px] rounded-full border border-cyan-400 border-[2px] ml-20" />
        </div>
      </div>

      <img src={moi} className="w-[290px] h-[386px] mt-10 mr-24" />
      <div className="absolute z-[10] right-10 top-150 w-[50%] h-[50%] rounded-full gray__gradient" />

    </section>
  )
}

export default About