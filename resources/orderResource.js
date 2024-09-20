import { Router } from 'express';
import OrderDTO from '../dtos/orderDTO.js';
import { findOrCreateUser } from '../services/userService.js';
import { retrieveProduct } from '../services/productService.js';
import { createOrder } from '../services/orderService.js';
import logger from '../utils/logger.js';

const router = Router();

router.post("/order", async (req, res) => {
    try {
        // Sanitize body
        const orderDTO = new OrderDTO(req.body);
        const errors = orderDTO.validate();
        if (errors.length > 0) {
            logger.error(`Validation Errors: ${errors.join(', ')}`);
            return res.status(400).send(errors.join(',\n'));
        }
        
        // Check if product exists
        const product = await retrieveProduct(req.body.product_id);
        if (!product) {
            logger.error(`Product Not Found With Product Id: ${req.body.product_id}`);
            return res.status(400).send(`Product Not Found With Product Id: ${req.body.product_id}`);
        }

        // Find or create user
        const user = await findOrCreateUser(req.body);

        // Create order
        const order = await createOrder(user.id, req.body.product_id)

        logger.info(`Order Created: ${JSON.stringify(order)}`);
        res.status(200).json({ success: true, order });
    } catch (e) {
        logger.error(`Error processing order: ${e.message}`);
        res.status(400).send(e);
    }
})

export default router