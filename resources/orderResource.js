import { Router } from 'express';
import OrderDTO from '../dtos/orderDTO.js';
import { getAll } from '../utils/queries.js';
import { findOrCreateUser } from '../services/userService.js';

const router = Router();

router.post("/order", async (req, res) => {
    try {
        // Sanitize body
        const orderDTO = new OrderDTO(req.body);
        const errors = orderDTO.validate();
        if (errors.length > 0) {
            return res.status(400).send(errors.join(',\n'));
        }
        
        const user = await findOrCreateUser(req.body);

        // const order = { user, product_id: req.body.product_id };
        // res.status(200).json({ success: true, order });
        res.status(200).send(req.body);
    } catch (e) {
        res.status(400).send('error');
    }
})

export default router