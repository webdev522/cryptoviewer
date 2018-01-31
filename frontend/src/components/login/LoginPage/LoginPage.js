import React from 'react';
import styles from './LoginPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoginPage = () => {
  return (
    <div className={cx('login-page')}>
      Login Page
    </div>
  );
};

export default LoginPage;