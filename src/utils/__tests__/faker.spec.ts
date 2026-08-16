import { describe, it, expect } from 'vitest'
import fakerData from '../faker'

describe('fakerData', () => {
  it('generates 20 mock data records with valid structure and photo paths', () => {
    expect(fakerData).toHaveLength(20)
    for (const record of fakerData) {
      expect(record.users).toBeDefined()
      expect(record.photos.length).toBeGreaterThan(0)
      expect(record.images.length).toBeGreaterThan(0)
      expect(record.foods.length).toBeGreaterThan(0)

      // Ensure no undefined or empty object errors occurred
      record.photos.forEach((photo) => {
        expect(typeof photo).toBe('string')
      })
      record.images.forEach((img) => {
        expect(typeof img).toBe('string')
      })
      record.foods.forEach((food) => {
        expect(typeof food.name).toBe('string')
        expect(typeof food.image).toBe('string')
      })
    }
  })
})
