import axios from 'axios'

//Constants
const initialData = {
  genres: []
}

const GET_GENRES_SUCESS = 'GET_GENRES_SUCESS'

//Reducers
export function getGenresReducer(state = initialData, action) {
  switch (action.type) {
    case GET_GENRES_SUCESS:
      return { ...state, genres: action.payload }
    default:
      return state
  }
}

//Actions
export const getGenresAction = () => async (dispatch, getState) => {
  try {
    const resp = await axios.get('https://heroesbackend.herokuapp.com/genres')
    // console.log('getGenresAction:', resp.data)
    dispatch({
      type: GET_GENRES_SUCESS,
      payload: resp.data
    })
  } catch (error) {
    console.log(error)
  }
}
