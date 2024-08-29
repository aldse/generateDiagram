import React from 'react';
import logo from './logo.svg';
import { useGlobalContext } from '../../context/context';
import { social, links } from './data';
import styles from './styles.module.scss';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.showsidebar : ''}`}>
      <div className={styles.sidebarheader}>
        <img src={logo} className={styles.logo} alt='coding addict' />
        <button className={styles.closebtn} onClick={closeSidebar}>
          &times;
        </button>
      </div>
      <ul className={styles.links}>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className={styles.socialicons}>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
