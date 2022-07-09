// import axios from 'axios'

//Const
const initialData = {
  details: []
}

const GET_DETAILS_SUCCESS = 'GET_DETAILS_SUCCESS'

//Reducers
export function detailsReducer(state = initialData, action) {
  switch (action.type) {
    case GET_DETAILS_SUCCESS:
      // return { ...state, details: action.payload }
      return { ...state, details: action.payload }
    default:
      return state
  }
}

//Actions
export const getDetailsAction = (id) => (dispatch, getState) => {
  // Traer el Estado y seleccionar el juego en función del id.
  const games = getState().games.games
  const game = games.find((game) => game.id === id)

  try {
    dispatch({
      type: GET_DETAILS_SUCCESS,
      payload: game
    })
  } catch (error) {
    console.log(error)
  }
}
