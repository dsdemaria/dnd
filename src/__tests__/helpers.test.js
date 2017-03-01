import { splitClassList, classesArray } from '../components/helpers.js'

describe('splitClassList', () => {
  it('should split class prop into individual classes', () => {
    const props = {
      filteredSpells: {
        class: 'Wizard, Sorcerer'
      }
    }
    const actual = splitClassList(props)
    const expected = ['Wizard', 'Sorcerer']
    expect(actual).toEqual(expected)
  })
})

describe('classesArray', () =>{
  it('should return an array.', () => {
    
    const actual = classesArray(props)
    const expected = []
  })
})
