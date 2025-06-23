import styles from './style.module.scss';

const Nav = () => {
  const navItems = [
    { path: '/', title: 'Services' },
    { path: '/pricing', title: 'Pricing' },
    { path: '/about', title: 'About' },
    { path: '/contact', title: 'Contact' },
  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
