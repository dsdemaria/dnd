export const REQUEST_SPELLS = 'REQUEST_SPELLS'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const TOGGLE_LOADING = 'TOGGLE_LOADING'
export const FILTER_SEARCH_LIST = 'FILTER_SEARCH_LIST'
const SPELLS_URL = 'http://localhost:8080/spells'

export const requestSpells = spells => ({
  type: REQUEST_SPELLS,
  spells
})

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm
})

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
  isLoading: false
})

export const filterSearchList = filteredSpells => ({
  type: FILTER_SEARCH_LIST,
  filteredSpells
})

export const fetchSpells = () => dispatch => {
  return fetch(SPELLS_URL)
    .then(response => response.json())
    .then(spells => {
      dispatch(requestSpells(spells))
    }).then(() => {
      dispatch(toggleLoading())
    })
    .catch(error => console.log('fetch error', error))
}
