import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'loadsh';
import { noop } from '@babel/types';
import AddCartModal from '../block/add-Cart-Modal';
import { getSearchedFood } from '../../actions/home-actions';

const propsTypes = {
  searchedData: PropTypes.object,
  openModal: PropTypes.func
};

const defaultProps = {
  searchedData: null,
  openModal: noop
};

class MenuList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      cartItem: null
    };
  }

  openCartModal = (data) => {
    this.setState({
      openModal: true,
      cartItem: data
    });
  }

  closeCartModal = () => {
    this.setState({
      openModal: false,
    });
  }
  
  render() {
    const { searchedData } = this.props;
    const { cartItem } = this.state;
    return (
      <div className="list-container row">
          { searchedData && _.map(searchedData.merchants, data =>
              (<div className="list-items col-md-3" onClick={() => this.openCartModal(data)} key={data.id}>
                <img src={data.image_set[0].lodpi} width="269" height="105" alt=""/>
                <h4>{data.name}</h4>
                <p>{data.description}</p>
                <p><span>{data.open_at_text}</span> <span>.{data.price_category}</span></p>
              </div>)
            )
          }
          {
            cartItem && 
            <AddCartModal isOpen={this.state.openModal} cartItem={this.state.cartItem} onClose={this.closeCartModal}/>
          }
      </div>
    );
  }
}

MenuList.propTypes = propsTypes;
MenuList.defaultProps = defaultProps;

// Map the component props to reducer state
const mapStateToProps = state => ({
  searchedData: state.appReducer.searchedData,
});

const mapDispatchToProps = dispatch => ({
  onSearchFood: () => { dispatch(getSearchedFood()); }
});

// Connect the component to gain access to state and dispatch
const ConnectedMenuList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuList);

export default ConnectedMenuList;
