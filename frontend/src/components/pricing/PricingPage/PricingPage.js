import React from 'react';
import styles from './PricingPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PricingPage = () => {
  return (
    <div className={cx('pricing-page')}>
      Pricing Page
    </div>
  );
};

export default PricingPage;