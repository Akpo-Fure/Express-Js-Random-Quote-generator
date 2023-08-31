import express from 'express'
import { randomQuote } from "../controllers";
const router = express.Router();

/* GET home page. */
router.get('/', randomQuote);

export default router;
