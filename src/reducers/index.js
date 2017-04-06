import { REQUEST_SPELLS, SET_SEARCH_TERM, FILTER_SEARCH_LIST } from '../actions'
import { fuzzySearch, splitSearchTerms } from '../components/helpers'

const DEFAULT_STATE = {
  spells: [],
  filteredSpells: [],
  searchTerm: ''
}

// filteredSearchList(e) {
//   e.persist();
//   const splitTerms = splitSearchTerms(e.target.value)
//   return splitTerms.reduce((filteredList, term) => {
//     return fuzzySearch(filteredList, term)
//   }, this.props.spells)
// }

const filterSearchList = (state, action) => {
  return {
    ...state,
    filteredSpells: splitSearchTerms(state.searchTerm).reduce((filteredList, term) => {
      return fuzzySearch(filteredList, term)
    }, state.spells)
  }
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
    spells: action.spells,
    filteredSpells: action.spells
  }
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case REQUEST_SPELLS:
      return requestSpells(state, action)
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case FILTER_SEARCH_LIST:
      return filterSearchList(state, action)
    default:
      return state
  }
}

export default rootReducer
