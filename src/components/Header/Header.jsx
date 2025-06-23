import classNames from 'classnames';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={classNames(styles.header, 'container')}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
