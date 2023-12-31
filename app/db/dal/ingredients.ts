
import { Op } from 'sequelize'
import { Ingredient, IngredientInput, IngredientOuput } from '../models'
import { GetAllIngredientsFilters } from './types'

export const create = async (payload: IngredientInput): Promise<IngredientOuput> => {
  const ingredient = await Ingredient.create(payload)
  return ingredient
}

export const update = async (id: number, payload: Partial<IngredientInput>): Promise<IngredientOuput> => {
  const ingredient = await Ingredient.findByPk(id)
  if (!ingredient) {
    // @todo throw custom error
    throw new Error('not found')
  }
  const updatedIngredient = await (ingredient as Ingredient).update(payload)
  return updatedIngredient
}

export const getById = async (id: number): Promise<IngredientOuput> => {
  const ingredient = await Ingredient.findByPk(id)
  if (!ingredient) {
    // @todo throw custom error
    throw new Error('not found')
  }
  return ingredient
}

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedIngredientCount = await Ingredient.destroy({
    where: { id }
  })
  return !!deletedIngredientCount
}

export const getAll = async (filters?: GetAllIngredientsFilters): Promise<IngredientOuput[]> => {
  return Ingredient.findAll({
    where: {
      ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
    },
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
  })
}