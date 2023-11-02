

export type ItemType = {
    name: string
  }
export type OrderType = {
    _id: string
    items: Array<ItemType>
    email: string
    address: string
    amount: number
    status: string
    name: string
    transaction_id: string
  }
  