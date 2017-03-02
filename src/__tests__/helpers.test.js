import { splitClassList, classesArray } from '../components/helpers.js'

describe('splitClassList', () => {
  it('should split class prop into individual classes', () => {
    const classString = 'Wizard, Sorcerer'
    const actual = splitClassList(classString)
    const expected = ['Wizard', 'Sorcerer']
    expect(actual).toEqual(expected)
  })
})
