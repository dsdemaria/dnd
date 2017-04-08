import { REQUEST_SPELLS, SET_SEARCH_TERM, TOGGLE_LOADING, FILTER_SEARCH_LIST } from '../actions'
import { splitSearchTerms, fuzzySearch } from '../components/helpers'
import debounce from 'lodash/debounce'

const DEFAULT_STATE = {
  spells: [],
  searchTerm: '',
  filteredSpells: [],
  isLoading: true
}

const setSearchTerm = (state, action) => {
  return {
    ...state,
    searchTerm: action.searchTerm
  }
}

const requestSpells = (state, action) => {
  return {
    ...state,
    filteredSpells: action.spells,
    spells: action.spells
  }
}

const toggleLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.isLoading
  }
}

const filteredSpells = (state, action) => {
  return {
    ...state,
    filteredSpells: splitSearchTerms(state.searchTerm)
      .reduce((filteredList, term) => fuzzySearch(filteredList, term), state.spells)
  }
}


const rootReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case REQUEST_SPELLS:
      return requestSpells(state, action)
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case TOGGLE_LOADING:
      return toggleLoading(state, action)
    case FILTER_SEARCH_LIST:
      return filteredSpells(state, action)
    default:
      return state
  }
}

export default rootReducer
