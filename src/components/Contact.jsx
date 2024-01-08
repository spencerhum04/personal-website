import styles, { layout } from '../style';

const Contact = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} underline decoration-cyan-300`}>Contact</h2>
        <p className={`${styles.paragraph} max-w-[600px]`}>Email: spencerhum04@gmail.com</p>
        <p className={`${styles.paragraph} max-w-[600px]`}>Phone: (647) 636 - 6315</p>
        <p className={`${styles.paragraph} max-w-[600px]`}>Linkedin: Spencer Hum</p>
        <p className={`${styles.paragraph} max-w-[600px]`}>Location: Kingston, Ontario</p>
      </div>
    </section>
  )
}

export default Contact