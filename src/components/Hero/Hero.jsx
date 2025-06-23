import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './style.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={classNames(styles.content, 'container')}>
        <h1>Luxury car detailing</h1>
        <p>
          Experience the prestige of a professionally detailed car, radiating
          elegance and refinement at every turn.
        </p>
        <Button title='Let’s connect' />
      </div>
    </section>
  );
};

export default Hero;
