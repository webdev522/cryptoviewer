import React from 'react';
import styles from './SettingPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SettingPage = () => {
  return (
    <div className={cx('setting-page')}>
      Setting Page
    </div>
  );
};

export default SettingPage;