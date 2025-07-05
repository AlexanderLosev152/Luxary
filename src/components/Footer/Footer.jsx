import classNames from 'classnames';
import styles from './style.module.scss';
import Logo from '../Logo/Logo';

const Footer = () => {
	const links = [
		{ title: 'Website', items: ['Services', 'Pricing', 'About'] },
		{ title: 'Website', items: ['Services', 'Pricing', 'About'] },
		{ title: 'Website', items: ['Services', 'Pricing', 'About'] }
	];
	return (
		<footer className={classNames(styles.footer, 'container')}>
			<div className={styles.boxText}>
				<Logo />
				<p>
					Experience the prestige of a professionally detailed car, radiating
					elegance and refinement at every turn.
				</p>
			</div>
			<div className={styles.boxLinks}>
				{links.map((link, index) => (
					<div key={index}>
						<h4>{link.title}</h4>
						<ul>
							{link.items.map((item, itemIndex) => (
								<li key={itemIndex}>
									<a href="">{item}</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	);
};

export default Footer;
