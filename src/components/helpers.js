import debounce from 'lodash/debounce'

export const searchHelper = (spellDetail, term) => spellDetail.toLowerCase().includes(term.toLowerCase());

export const classesArrayHelper = (classesArray, term) => classesArray.map(dndClass => dndClass.toLowerCase()).includes(term.toLowerCase());

export const debouncedSearch = (...args) => {
  const debounced = debounce(...args)
  return (e) => {
    e.persist()
    return debounced(e)
  }
}
