import { Types } from "./schema"

export type ShoppingCartPayload = {
  [Types.AddProductToCart]: {
    value: number
  };
  [Types.ClearCart]: {
    value: number
  };
}


export type shoppingCartType = {
  qtd: number;
  amount: number;
}
