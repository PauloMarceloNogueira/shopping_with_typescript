import { shoppingCartType } from "../Schema/ShoppingCart.schema"
import { ShoppingCartActions, ProductActions } from "../reducers"
import { Types } from "../Schema/schema"

export const shoppingCartReducer = (state:shoppingCartType, action:ShoppingCartActions | ProductActions) => {
  switch(action.type) {
    case Types.AddProductToCart: {
      return {
        ...state,
        qtd: state.qtd + 1,
        amount: state.amount + action.payload.value
      }
    }
    case Types.ClearCart:
      return {
        qtd: 0,
        amount: 0
      }
    
    default:
      return state
  }
}
