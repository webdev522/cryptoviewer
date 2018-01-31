import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = ({onClickButton}) => {
  return (
    <div className={cx('header')}>
      <button onClick={onClickButton}>Header</button>
    </div>
  );
};

export default Header;