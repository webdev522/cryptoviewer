import React from 'react';
import styles from './NotFoundPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NotFoundPage = () => {
  return (
    <div className={cx('not-found-page')}>
      Not Found Page
    </div>
  );
};

export default NotFoundPage;