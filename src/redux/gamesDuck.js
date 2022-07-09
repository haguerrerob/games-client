import axios from 'axios'

//Const
const initialData = {
  games: []
}

const GET_GAME_SUCCESS = 'GET_GAME_SUCCESS'

//Reducers
export function gamesReducer(state = initialData, action) {
  switch (action.type) {
    case GET_GAME_SUCCESS:
      return { ...state, games: action.payload }
    default:
      return state
  }
}

//Actions
export const getGamesAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get('https://heroesbackend.herokuapp.com/games')
    dispatch({
      type: GET_GAME_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}
