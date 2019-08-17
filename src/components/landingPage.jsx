import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './module/home';
import ErrorPage from './block/error-page';

const propsTypes = {
  isLanding: PropTypes.bool,
  cartItem: PropTypes.array
};

const defaultProps = {
  isLanding: true,
  cartItem: []
};

class LandingPage extends React.Component {
  render() {
    let { isLanding, cartItem } = this.props;
    return (
      <div className="">
        <div className="header-wrapper">
          <div className="main-header row">
            <div className="col-md-4 col-2 account-toggle">
              <div className="account-toggle-icon">
                <p className="account-icon img-src"></p>
                <p className="account-label">Sign</p>
              </div>
            </div>
            <div className="logo-container col-md-4 col-8">
              <img className="logo-img" src="https://s3.amazonaws.com/trycaviar.com/logos/caviar-logo-2x-257512e8235507e855e789446ccf529c340e3deb21105e62ef30849cd2a198a0.png" alt=""/>
            </div>
            <div className="col-md-4 col-2">
              <p className="item-number">
                {cartItem.length > 0 ? (cartItem.length + 'Item') : (<span>No Items</span>)}
              </p>
              <p className="account-cart img-src"></p>
            </div>
          </div>
        </div>
        { isLanding ?
          (<Home />)
          :
          (<ErrorPage />)
        }
      </div>
    );
  }
}

LandingPage.propTypes = propsTypes;
LandingPage.defaultProps = defaultProps;

// Map the component props to the aovob reducer state
const mapStateToProps = state => ({
  isLanding: state.appReducer.isLanding,
  cartItem: state.appReducer.cartItem
});

// Connect the component to gain access to state and dispatch
const ConnectedLanding = connect(
  mapStateToProps,
  null,
)(LandingPage);

export default ConnectedLanding;
