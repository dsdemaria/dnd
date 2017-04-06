export const REQUEST_SPELLS = 'REQUEST_SPELLS'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const FILTER_SEARCH_LIST = 'FILTER_SEARCH_LIST'
const SPELLS_URL = 'http://localhost:8080/spells'

export const filterSearchList = filteredSpells => ({
  type: FILTER_SEARCH_LIST,
  filteredSpells
})

export const requestSpells = spells => ({
  type: REQUEST_SPELLS,
  spells
})

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm
})

export const fetchSpells = () => dispatch => {
  return fetch(SPELLS_URL)
    .then(response => response.json())
    .then(spells => {
      dispatch(requestSpells(spells))
    })
    .catch(error => console.log('fetch error', error))
}
