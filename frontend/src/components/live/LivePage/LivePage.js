import React from 'react';
import styles from './LivePage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LivePage = () => {
  return (
    <div className={cx('live-page')}>
      Live Page
    </div>
  );
};

export default LivePage;