import debounce from 'lodash/debounce'
import Fuse from 'fuse.js'
import fetch from 'node-fetch'

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

export const getSpells = () => {
  return fetch('http://localhost:8080/spells')
    .then(response => response.json())
    .then(spells => spells)
    .catch(error => console.log(error))
}

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
