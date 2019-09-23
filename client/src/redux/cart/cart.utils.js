export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === existingCartItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
} 

export const removeItemFromCart = (cartItems, cartItemToDelete) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToDelete.id
    );

    if(existingCartItem.quantity>1){
        return cartItems.map(cartItem =>
            cartItem.id === existingCartItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } 
            : cartItem
        );
    }
    return cartItems.filter(item=> item.id !== cartItemToDelete.id);
}
