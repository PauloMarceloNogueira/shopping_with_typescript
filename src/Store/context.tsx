import React, { createContext, useReducer } from 'react'
import { ShoppingCartActions, ProductActions} from './reducers'
import {productReducer} from './Reducer/Product.reducer' 
import {shoppingCartReducer} from './Reducer/ShoppingCart.reducer'
import {FilterReducer} from './Reducer/Filter.reducer'

type ProductType = {
  id: number;
  picture: string;
  title: string;
  price: number;
  qtd: number;
  shippingFree: boolean;
}

type FilterType = {
  key: string,
  value: string
}

type InitialStateType = {
  products: ProductType[]
  shoppingCart: shoppingCartType
  filter: FilterType[]
}


type shoppingCartType = {
  qtd: number;
  amount: number;
}

const initialState:InitialStateType = {
  products: [],
  shoppingCart: {
    qtd: 0,
    amount: 0
  },
  filter: []
}

const AppContext = createContext<{state: InitialStateType; dispatch: React.Dispatch<any>}>({
  state: initialState,
  dispatch: () => null
})

const mainReducer = ({products, shoppingCart, filter}:InitialStateType, action: ProductActions | ShoppingCartActions) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
  filter: FilterReducer(filter, action)
});

const AppProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}