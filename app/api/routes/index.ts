import { Router } from 'express'
import ingredientsRouter from './ingredients'

const router = Router()

router.use('/ingredients', ingredientsRouter)

export default router