import styles, { layout } from '../style';
import { downarrowicon } from '../assets';
import { useState } from 'react'

const Contact = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <div className="flex justify-center items-center">
          <img src={downarrowicon} className={`w-5 h-3 flex transform transition ease-in-out duration-500 cursor-pointer ${toggle ? '' : '-rotate-90'}`} onClick={handleClick} />
          <h2 className={`text-[25px] text-white ml-6 flex`}>&lt;contact&gt;</h2>
        </div>

        {/* Toggle to load contact */}
        {toggle && (
          <div className="ml-20 mt-6">
            <p className={`${styles.paragraph} max-w-[600px]`}>Email: spencerhum04@gmail.com</p>
            <p className={`${styles.paragraph} max-w-[600px]`}>Phone: (647) 636 - 6315</p>
            <p className={`${styles.paragraph} max-w-[600px]`}>Linkedin: Spencer Hum</p>
            <p className={`${styles.paragraph} max-w-[600px]`}>Location: Kingston, Ontario</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact;
