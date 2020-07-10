import { ActionMap } from './Schema/schema'

import { ProductPayload } from './Schema/Product.schema'

import { ShoppingCartPayload } from './Schema/ShoppingCart.schema'

import { FilterPayload } from './Schema/Filter.schema'

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>]

export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>]

export type FilterActions = ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>]