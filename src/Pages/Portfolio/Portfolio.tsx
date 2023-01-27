import { Link } from "react-router-dom";
import CreditCardAnimation from "./Components/CreditCardAnimation/CreditCardAnimation";
import PhoneAnimation from "./Components/PhoneAnimation/PhoneAnimation";
import ScrollPrompt from "./Components/ScrollPrompt/ScrollPrompt";
import styles from "./Portfolio.module.css";
export default function Portfolio() {
  document.title = "Robert Skaar | Portfolio";
  return (
    <div className={styles.portfolioPageContainer}>
      <div className={styles.carouselWrapper}>
        <section className={`${styles.sectionContainerPrompt}`}>
          <ScrollPrompt></ScrollPrompt>
        </section>
        <section className={`${styles.sectionContainer}`}>
          <PhoneAnimation></PhoneAnimation>
          <div className={styles.TextContainer}>
            <h1>Phone</h1>
            <p>
              pleasing to the eye, this phone animation handles hover on the
              text and displays staggering animations
            </p>
          </div>
        </section>
        <section id="#card" className={`${styles.sectionContainer}`}>
          <div className={styles.TextContainer}>
            <h1>Credit Card</h1>
            <p>
              It wont let you go on a shopping spree, but why wear it down in
              the ATMs when its this good looking anyway
            </p>
          </div>
          <CreditCardAnimation></CreditCardAnimation>
        </section>
      </div>
    </div>
  );
}
