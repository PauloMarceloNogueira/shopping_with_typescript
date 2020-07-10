import { Types } from "./schema"

export type FilterPayload = {
  [Types.Filter]: {
    key: string
    value: string
  }
  [Types.ClearFilter]: undefined
}

export type FilterType = {
  key: string,
  value: string
}