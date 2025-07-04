import styles from './style.module.scss';

import classNames from 'classnames';
import Button from '../Button/Button';

import BG from '/images/bookyour-bg.jpg';

const Bookyour = () => {
	return (
		<section className={classNames(styles.bookyour, 'container')}>
			<img src={BG} alt="img" />
			<div className={styles.box}>
				<h2>Book your luxury car detailing today</h2>
				<p>
					Click the link bellow. Fill out the details and we’ll get back to you
					in less than 24 hours.
				</p>
				<Button title="Get a quote now" />
			</div>
		</section>
	);
};

export default Bookyour;
