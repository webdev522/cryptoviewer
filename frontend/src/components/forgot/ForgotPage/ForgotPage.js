import React from 'react';
import styles from './ForgotPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ForgotPage = () => {
  return (
    <div className={cx('forgot-page')}>
      Forgot Page
    </div>
  );
};

export default ForgotPage;