import { CartItemRecord } from '@/types'

export default defineEventHandler(async (event) => {
    let cart: CartItemRecord | null = await useStorage().getItem('db:cart')
    return cart || {} as CartItemRecord
})