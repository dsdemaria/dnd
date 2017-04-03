export const REQUEST_SPELLS = 'REQUEST_SPELLS'
const SPELLS_URL = 'http://localhost:8080/spells'


export const requestSpells = spells => ({
  type: REQUEST_SPELLS,
  spells
})

export const fetchSpells = () => dispatch => {
  return fetch(SPELLS_URL)
    .then(response => response.json())
    .then(spells => {
      dispatch(requestSpells(spells))
    })
    .catch(error => console.log('fetch error', error))
}
