export type ActionMap<M extends { [index: string]: any }> = {
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