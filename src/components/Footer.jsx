import styles from '../style';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <p className="text-center text-white">&copy; 2024 Spencer Hum. All Rights Reserved.</p>
      </div>
    </div>
  </section>
)

export default Footer