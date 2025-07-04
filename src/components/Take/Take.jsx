import styles from './style.module.scss';
import classNames from 'classnames';

import img1 from '/images/take-1.png';
import img2 from '/images/take-2.png';
import img3 from '/images/take-3.png';

import img from '/images/car-take.jpg';
import Button from '../Button/Button.jsx';

const Take = () => {
	const Takes = [
		{
			img: img1,
			title: 'Precise work',
			decr: 'We uphold the highest standards of professionalism when servicing your vehicles.'
		},
		{
			img: img2,
			title: 'Premium Products and Services',
			decr: "Ensure your car's longevity with a periodic exterior protection treatment."
		},
		{
			img: img3,
			title: 'High-Level Security and Privacy',
			decr: 'We understand the importance of privacy and security for their our clientele.'
		}
	];

	return (
		<section className={classNames(styles.take, 'container')}>
			<div className={styles.text}>
				<h2 className="h2">We will take good care of your car</h2>
				<img src={img} alt="img" />
			</div>
			<div className={styles.wrapper}>
				{Takes.map((item, index) => (
					<div className={styles.box} key={index}>
						<h3>
							<img src={item.img} alt={item.title} />
							{item.title}
						</h3>
						<p>{item.decr}</p>
					</div>
				))}
				<Button title="Get a quote now" />
			</div>
		</section>
	);
};

export default Take;
