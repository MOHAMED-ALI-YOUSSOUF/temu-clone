import { type SchemaTypeDefinition } from 'sanity'
import { productCategory } from './schemas/product-category'
import { product } from './schemas/product'
import { promotionCode } from './schemas/promotion-codes'
import { promotionCampaign } from './schemas/promotion-compaign'
import { order, orderItem, shippingAddress } from './schemas/order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    promotionCode,
    promotionCampaign,

    productCategory,
    product,

    shippingAddress,
    orderItem,
    order,
  ],
}
