export const REQUEST_SPELLS = 'REQUEST_SPELLS'
export const REQUEST_SPELLCASTING_DATA = 'REQUEST_SPELLCASTING_DATA'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const TOGGLE_LOADING = 'TOGGLE_LOADING'
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX'
export const FILTER_SEARCH_LIST = 'FILTER_SEARCH_LIST'
const SPELLS_URL = 'http://localhost:8080/spells'
const SPELLCASTINGDATA_URL = 'http://localhost:8080/spellcastingData'

export const requestSpells = spells => ({
  type: REQUEST_SPELLS,
  spells
})

export const requestSpellcastingData = spellcastingData => ({
  type: REQUEST_SPELLCASTING_DATA,
  spellcastingData
})

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm
})

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
  isLoading: false
})

export const toggleCheckbox = id => ({
  type: TOGGLE_CHECKBOX,
  id
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
    .catch(error => console.log('fetch spells error', error))
}

export const fetchSpellcastingData = () => dispatch => {
  return fetch(SPELLCASTINGDATA_URL)
    .then(response => response.json())
    .then(spellcastingData => {
      dispatch(requestSpellcastingData(spellcastingData))
    })
    .catch(error => console.log('fetch spellcastingData error', error))
}
