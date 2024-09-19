import { getProduct } from '../utils/queries.js'; 

export const retrieveProduct = async (product_id) => {
    try {
        const product = await getProduct(product_id);

        return product
    } catch (error) {
        throw new Error('Error creating product', 400);
    }
};