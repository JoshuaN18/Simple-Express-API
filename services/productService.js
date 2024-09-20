import { getProduct } from '../utils/queries.js';
import logger from '../utils/logger.js';

export const retrieveProduct = async (product_id) => {
    try {
        const product = await getProduct(product_id);

        return product
    } catch (error) {
        logger.error(`Error Retrieving Product: ${error.message}`);
        throw new Error(`Error Retrieving Product: ${error.message}`, 400);
    }
};