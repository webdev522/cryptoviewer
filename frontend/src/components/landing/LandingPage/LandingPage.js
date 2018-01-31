import React from 'react';
// import styles from './LandingPage.scss';
// import classNames from 'classnames/bind';

import { PageTemplate } from 'components';
import { HeaderContainer } from 'containers';

// const cx = classNames.bind(styles);

const LandingPage = () => {
  return (
    <PageTemplate header={<HeaderContainer/>}  padding responsive>
      <div>Landing Page</div>
    </PageTemplate>
  );
  // return (
  //   <div>asdf</div>
  // );
};

export default LandingPage;