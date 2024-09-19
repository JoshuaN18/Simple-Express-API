import { Router } from 'express';
import OrderDTO from '../dtos/orderDTO.js';
import { findOrCreateUser } from '../services/userService.js';
import { retrieveProduct } from '../services/productService.js';
import { createOrder } from '../services/orderService.js';

const router = Router();

router.post("/order", async (req, res) => {
    try {
        // Sanitize body
        const orderDTO = new OrderDTO(req.body);
        const errors = orderDTO.validate();
        if (errors.length > 0) {
            return res.status(400).send(errors.join(',\n'));
        }
        
        // Check if product exists
        const product = await retrieveProduct(req.body.product_id);
        if (!product) {
            return res.status(400).send('Product not found');
        }

        // Find or create user
        const user = await findOrCreateUser(req.body);

        // Create order
        const order = await createOrder(user.id, req.body.product_id)

        res.status(200).json({ success: true, order });
    } catch (e) {
        res.status(400).send(e);
    }
})

export default router