import { addOrder } from '../utils/queries.js'; 

export const createOrder = async (user_id, product_id) => {
    try {
        const order = await addOrder(user_id, product_id);

        return order;
    } catch (error) {
        throw new Error('Error creating order', 400);
    }
};