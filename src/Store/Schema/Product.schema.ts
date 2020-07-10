import {Types} from './schema'

export type ProductType = {
  id: number;
  picture: string;
  title: string;
  price: number;
  qtd: number;
  shippingFree: boolean;
}

export type ProductPayload = {
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
