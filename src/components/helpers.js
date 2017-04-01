import debounce from 'lodash/debounce'
import Fuse from 'fuse.js'

export const searchHelper = (spellDetail, term) => spellDetail.toLowerCase().includes(term.toLowerCase());

export const classesArrayHelper = (classesArray, term) => classesArray.map(dndClass => dndClass.toLowerCase()).includes(term.toLowerCase());

export const debouncedSearch = (...args) => {
  const debounced = debounce(...args)
  return (e) => {
    e.persist()
    return debounced(e)
  }
}

export const splitSearchTerms = searchInput => searchInput.split(',')

//NEED TO ADD NUMBER SEARCH CAPABILITES. I THINK THAT THE NUMBERS NEED TO BE CONVERTED TO STRINGS
export const fuzzySearch = (spells, searchTerm) => {
  const options = {
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [
      "name",
      "level",
      "school",
      "classes"
    ]
  }
  const fuse = new Fuse(spells, options)
  return fuse.search(searchTerm)
}
