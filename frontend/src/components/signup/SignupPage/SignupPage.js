import React from 'react';
import styles from './SignupPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SignupPage = () => {
  return (
    <div className={cx('signup-page')}>
      Signup Page
    </div>
  );
};

export default SignupPage;