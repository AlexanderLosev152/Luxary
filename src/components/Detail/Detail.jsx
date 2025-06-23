import styles from './style.module.scss';
import classNames from "classnames";
import Button from "../Button/Button.jsx";

import img1 from '../../../public/images/detail-img-1.jpg';
import img2 from '../../../public/images/detail-img-2.jpg';
import img3 from '../../../public/images/detail-img-3.jpg';
import img4 from '../../../public/images/car-111.jpg';

const Detail = () => {
    const Details = [
        {title:'Entry level detail',decr: 'Treat your luxury car to a thorough hand wash and wax application.', img: img1},
        {title:'Maintenance detail',decr: 'Ensure your car\'s longevity with a periodic exterior protection treatment.',img:img2},
        {title:'Full detail',decr: 'Pamper your vehicle with a complete treatment, leaving no detail overlooked.',img:img3},
    ];

    return <section className={classNames(styles.detail,'container')}>
        <div className={styles.detailText}>
            <h2>Love in Every Detail</h2>
            <p>Immerse yourself in luxury with our bespoke detailing packages tailored to your car's unique needs.</p>
        </div>

        <div className={styles.wrapper}>
            {Details.map((item, index) => (
                <div className={styles.box} key={index}>
                    <img src={item.img} alt={item.title} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.decr}</p>
                    </div>

                    <Button title="Learn more" />
                </div>
            ))}
        </div>

        <div>
            <img src={img4} alt="img"/>
        </div>

    </section>
}
export default Detail;