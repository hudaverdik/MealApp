import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items:[],
  totalAmount:0
}
const cartReducer = (state,action)=>{
  if (action.type==='ADD-CART-ITEM'){
    const updatedItems=state.items.concat(action.item);
    const updatedTotalAmount =state.totalAmount+ action.item.price*action.item.amount;
    return {
      items:updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return
};

const CartProvider = (props) => {
  const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState)
  const addCartItemHandler = (item) => {
    dispatchCartAction({
      type: 'ADD_CART_ITEM', item:item
    });
  };

  const removeCartItemHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE-CART-ITEM',id:id
    })
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
