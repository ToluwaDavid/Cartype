import { createContext, ReactNode, useContext, useState } from "react"
import ShoppingCart from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItems = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItems[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

const [IsOpen, setIsOpen] = useState(false)
const [cartItems, setCartItems] = useLocalStorage<CartItems[]>("shopping-cart", [])

const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
)

const openCart = () => setIsOpen(true)
const closeCart = () => setIsOpen(false)

function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
}

function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
        if (currItems.find(items => items.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
        } else {
            return currItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
        }
    })
}

function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
        if (currItems.find(items => items.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
        } else {
            return currItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 }
                } else {
                    return item
                }
            })
        }
    })
}

function removeFromCart(id: number) {
    setCartItems(currItems => {
        return currItems.filter(item => item.id !== id)
    })
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{
            removeFromCart,
            getItemQuantity,
            decreaseCartQuantity,
            increaseCartQuantity,
            openCart,
            closeCart,
            cartItems,
            cartQuantity,

        }}>
            {children}
            <ShoppingCart isOpen={IsOpen} />
        </ShoppingCartContext.Provider>
    )
}