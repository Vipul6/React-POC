import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSearchedFood } from '../../actions/home-actions';
import { noop } from '@babel/types';
import MenuList from '../module/menu-list';

const propsTypes = {
  onSearchFood: PropTypes.func
};

const defaultProps = {
  onSearchFood: noop
};

class Home extends React.Component {
  componentDidMount() {
    this.props.onSearchFood();
  }

  render() {
    return (
      <div className="container-body">
        <div className="container-wrapper"></div>
        <div className="search-container">
          <h1>Get food you want.</h1>
          <h4>Order for delivery or pickup.</h4>
          <div className="search-field">
            <input className="col-md-4 col-sm-12 col-12 search-input" placeholder="Let’s start with your address" value="Philadelphia" onChange={() => {}}/>
            <button className="col-md-1 col-sm-12 col-12 search-button">Get food</button>
          </div>
        </div>
        <section className="row popular-items-container">
          <div className="popular-items">
            <h2 className="popular-header">Top Picks on Caviar</h2>
            <MenuList />
          </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = propsTypes;
Home.defaultProps = defaultProps;

// Map the component props to the aovob reducer state
const mapStateToProps = state => ({
  isPageError: state.appReducer.isPageError,
});

const mapDispatchToProps = dispatch => ({
  onSearchFood: () => { dispatch(getSearchedFood()); },
});

// Connect the component to gain access to state and dispatch
const ConnectedHome = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default ConnectedHome;
