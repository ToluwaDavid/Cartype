import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import StoreItems from '../data/items.json'
import { formatCurrency } from '../utils/formatCurremcy'

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = StoreItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <div>
            <Stack direction='horizontal' gap={2}>
                <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
                <div className='me-auto'>
                    <div>
                        {item.name} {quantity > 1 && <span className='text-muted' style={{ fontSize: ".65rem" }} >{quantity}x</span>}
                    </div>
                </div>
                <div className='text-muted' style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
                <div>
                    {formatCurrency(item.price * quantity)}
                </div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
            </Stack>
        </div>
    )
}

export default CartItem 