import React from 'react';
import styles from './CompanyPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CompanyPage = () => {
  return (
    <div className={cx('company-page')}>
      Company
    </div>
  );
};

export default CompanyPage;