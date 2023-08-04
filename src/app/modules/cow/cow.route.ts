import express from 'express'
import { cowControllers } from './cow.controllers'
import validateRequest from '../../middlewares/validateRequest'
import { createCowZodSchema, updateCowZodSchema } from './cow.validations'

const router = express.Router()

router.post(
  '/create-cows',
  validateRequest(createCowZodSchema),
  cowControllers.createCowController,
)

router.patch(
  '/cows/:id',
  validateRequest(updateCowZodSchema),
  cowControllers.updateCowsController,
)

router.get('/cows', cowControllers.getAllCowsController)
router.get('/cows/:id', cowControllers.getSignleCowsController)
router.delete('/cows/:id', cowControllers.deleteCowsController)
export const cowRouter = router
