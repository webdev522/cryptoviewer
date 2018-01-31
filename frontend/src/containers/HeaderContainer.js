import React, { Component } from 'react';

// import redux dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

import { Header } from 'components';

class HeaderContainer extends Component {
  handleButtonClick = () => {
    console.log('haha');
    const { BaseActions } = this.props;
    BaseActions.doTestAction();
  }

  render() {
    const { handleButtonClick } = this;
    return (
      <div>
        <Header onClickButton={handleButtonClick}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);