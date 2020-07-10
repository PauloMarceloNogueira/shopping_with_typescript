import { ProductType } from "../Schema/Product.schema"
import { ProductActions, ShoppingCartActions } from "../reducers"
import { Types } from "../Schema/schema"

export const productReducer = (state: ProductType[], action: ProductActions | ShoppingCartActions) => {
  switch(action.type) {
    case Types.LoadingProducts:
      return [
        ...state,
        {
          id: action.payload.id,
          picture: action.payload.picture,
          title: action.payload.title,
          price: action.payload.price,
          qtd: action.payload.qtd,
          shippingFree: action.payload.shippingFree
        }
      ]
    case Types.RefreshQuantity:
      return [
        ...state.map(s => {
          if (s.id === action.payload.id) {
            return {
              ...s,
              qtd: s.qtd - 1
            }
          }
          return s
        })
      ]
    default: 
      return state
  }
}
