import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../styles/menu.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


interface Props {
  children: ReactElement;
}

export const DefaultLayout = ({ children }: Props) => {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <h2>Online Courses</h2>
        <ul>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? `${styles["nav-active"]}` : ""
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) =>
                isActive ? styles["nav-active"] : ""
              }
            >
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students"
              className={({ isActive }) =>
                isActive ? styles["nav-active"] : ""
              }
            >
              Students
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className={`${styles.backdrop} ${
          isOpen ? styles["backdrop-active"] : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>

      <header className={styles.header}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h2>Online courses</h2>
      </header>
      {children}
    </>
  );
};
