type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  LoadingProducts = 'LOADING_PRODUCTS',
  RefreshQuantity = 'REMOVE_QTD',
  AddProductToCart = 'ADD_PRODUCT',
  ClearCart = 'CLEAR_CART',
  Filter = 'SET_FILTER',
  ClearFilter = 'CLEAR_FILTER'
}

type ProductType = {
  id: number;
  picture: string;
  title: string;
  price: number;
  qtd: number;
  shippingFree: boolean;
}

type ProductPayload = {
  [Types.LoadingProducts]: {
    id: number,
    picture: string,
    title: string,
    price: number,
    shippingFree: boolean,
    qtd: number
  };
  [Types.RefreshQuantity]: {
    id: number
  }
}

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>]


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

type ShoppingCartPayload = {
  [Types.AddProductToCart]: {
    value: number
  };
  [Types.ClearCart]: {
    value: number
  };
}


type shoppingCartType = {
  qtd: number;
  amount: number;
}

export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>]
export const shoppingCartReducer = (state:shoppingCartType, action:ShoppingCartActions | ProductActions) => {
  switch(action.type) {
    case 'ADD_PRODUCT': {
      return {
        ...state,
        qtd: state.qtd + 1,
        amount: state.amount + action.payload.value
      }
    }
    case 'CLEAR_CART':
      return {
        qtd: 0,
        amount: 0
      }
    
    default:
      return state
  }
}

type FilterPayload = {
  [Types.Filter]: {
    key: string
    value: string
  }
  [Types.ClearFilter]: undefined
}

type FilterType = {
  key: string,
  value: string
}

export type FilterActions = ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>]
export const FilterReducer = (state: FilterType, action: FilterActions | ShoppingCartActions | ProductActions) => {
  switch (action.type) {
    case Types.Filter:
      return {
        ...state,
        key: action.payload.key,
        value: action.payload.value
      }
    
    case Types.ClearFilter:
      return {
        key: '',
        value: ''
      }
  
    default:
      return state
  }
}