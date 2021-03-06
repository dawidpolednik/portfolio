import React, { FC } from 'react';
import { Link } from 'react-scroll';
import styles from './DoubleAngle.module.scss';

interface DoubleAngleProps {
  onUp?: boolean;
  subPage: NavigationSectionName;
}

export const DoubleAngle: FC<DoubleAngleProps> = ({ onUp, subPage }) => (
  <Link
    activeClass="active"
    className={styles.doubleAngle}
    to={subPage}
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={0}
    duration={500}
    delay={250}
    isDynamic={true}
    ignoreCancelEvents={false}
  >
    {!onUp ? (
      <i className="fa fa-angle-double-down " aria-hidden="true"></i>
    ) : (
      <i className="fa fa-angle-double-up " aria-hidden="true"></i>
    )}
  </Link>
);
