import { Router } from 'express';
import { getAll } from '../utils/queries.js'; 

const router = Router();

router.post("/order", async (req, res) => {
    try {
        const results = await getAll();
        res.send(results);
    } catch (e) {
        res.status(400).send(e);
    }
})

export default router