import { FilterType } from "../Schema/Filter.schema"
import { FilterActions, ShoppingCartActions, ProductActions } from "../reducers"
import { Types } from "../Schema/schema"

export const FilterReducer = (state: FilterType[], action: FilterActions | ShoppingCartActions | ProductActions) => {
  switch (action.type) {
    case Types.Filter:
      return [
        ...state,
        {
          key: action.payload.key,
          value: action.payload.value
        }
      ]
    
    case Types.ClearFilter:
      return []
  
    default:
      return state
  }
}