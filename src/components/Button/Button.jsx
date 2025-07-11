import styles from './style.module.scss';

const Button = ({ title }) => {
  return (
    <a className={styles.btn} href='#'>
      {title}
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18 1C18 0.447715 17.5523 0 17 0H8C7.44772 0 7 0.447715 7 1C7 1.55228 7.44772 2 8 2H16V10C16 10.5523 16.4477 11 17 11C17.5523 11 18 10.5523 18 10V1ZM1.70711 17.7071L17.7071 1.70711L16.2929 0.292893L0.292893 16.2929L1.70711 17.7071Z'
          fill='white'
        />
      </svg>
    </a>
  );
};

export default Button;
