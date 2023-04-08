export const addToCart = (book) => {
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
}

// export default removeFromCart = (book) => {
//     return {
//         type: 'REMOVE_FROM_CART',
//         payload: book
//     }
// }