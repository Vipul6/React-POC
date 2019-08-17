import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../../actions/home-actions';

class AddCartModal extends React.Component {
  onClose = (e) => {
    e.preventDefault()
    this.props.onClose()
  }
  render() {
     const {
            isOpen,
            cartItem,
            onAddToCart,
            onClose
        } = this.props
      console.log('cartItem: ',cartItem);
      return isOpen ? (
          <div className='overlay'>
              <div className='popup'>
                <div className="cart-item-details">
                  <a className='close' onClick={ (e) => onClose(e) }>&times;</a>
                  <div className="item-container">
                    <img className="item-image" src={cartItem.image_set[0].lodpi} alt=""/>
                    <div className="item-description">
                      <h4>{cartItem.name}</h4>
                      <p>{cartItem.description}</p>
                    </div>
                  </div>
                  <div className="item-quantity">
                    <p className="quantity">Quantity</p>
                    <div className="add-remove-item">
                      <p className="remove-item float-left"></p>
                      <span>0</span>
                      <p className="add-item float-right"></p>
                    </div>
                    <p className="instructions">Add Special Item Instruction</p>
                  </div>
                  <div className="add-note">
                    <p>Ex. ‘No Mayo! - Please write concisely and clearly!’ (Any resulting price adjustments will be added by the restaurant after checkout.)</p>
                  </div>
                  <div className="extra-pad"></div>
                  <div className="add-to-cart-btn" onClick={() => onAddToCart(cartItem.id, onClose)}>
                    <button><span>Add to Cart</span></button>
                    <span className="price-tag float-right">{cartItem.delivery_fee +' '+ cartItem.currency_unit}</span>
                  </div>
                </div>
              </div>
       </div>
    ):
    null
  }
}
AddCartModal.propTypes = {
   onClose: PropTypes.func.isRequired,
   isOpen: PropTypes.bool.isRequired,
   onAddToCart: PropTypes.func
}

AddCartModal.defaultProps = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  onAddToCart: PropTypes.func

};

// Map the component props to the aovob reducer state
const mapStateToProps = state => ({
  isPageError: state.appReducer.isPageError,
});

const mapDispatchToProps = dispatch => ({
  onAddToCart: (value, onClose) => { 
    dispatch(addToCart(value));
    onClose();
  },
});

// Connect the component to gain access to state and dispatch
const ConnectedAddCartModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCartModal);

export default ConnectedAddCartModal;
