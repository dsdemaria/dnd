import { REQUEST_SPELLS, SET_SEARCH_TERM } from '../actions'

const DEFAULT_STATE = {
  spells: [],
  searchTerm: ''
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
  }
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case REQUEST_SPELLS:
      return requestSpells(state, action)
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
