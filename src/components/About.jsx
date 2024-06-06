import styles from '../constants/styles';
import { bizMan } from '../assets';

const About = () => {
  return (
    <section className={`${styles.card} ${styles.paddingYX} `}>
      <div className={`${styles.cardImg} w-500px h-auto`}>
        <img src={bizMan} className="w-[60%] h-[60%] object-contain" />
      </div>
      <div className={`${styles.cardDetails}`}>
        <h1 className={`${styles.heading2}}`}>
          Why our products<br></br>are different
        </h1>
        <p className={`${styles.paragraph}  ${styles.cardDetails}`}>
          Unlock convenience with our swift and secure digital payment
          solutions. Say goodbye to hassle, hello to efficiency!
        </p>
      </div>
    </section>
  );
};

export default About;
