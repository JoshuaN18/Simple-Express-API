import { addOrder } from '../utils/queries.js';
import logger from '../utils/logger.js';

export const createOrder = async (user_id, product_id) => {
    try {
        const order = await addOrder(user_id, product_id);

        return order;
    } catch (error) {
        logger.error(`Error Creating Order: ${error.message}`);
        throw new Error(`Error Creating Order: ${error.message}`, 400);
    }
};