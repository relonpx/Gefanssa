import express from 'express'
import {home, products} from '../controllers/indexController.js'

const router = express.Router()

router.get('/', home)
router.get('/products', products)

export default router