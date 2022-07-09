import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//Llamamos a todos los reducers...
import { gamesReducer } from './gamesDuck'
import { getGenresReducer } from './genresDuck'
import { selectedListReducer } from './genresListDuck'
import { detailsReducer } from './detailsDuck'

//Combinamos todos los reducers
const rootReducer = combineReducers({
  games: gamesReducer, // Se obtiene los Games desde la base de datos
  genres: getGenresReducer, // Se obtiene el modelo Genero y la cantidad de Games por Genero desde la base de datos
  selectList: selectedListReducer, // Selecciona el genero para filtrar por genero
  details: detailsReducer // Se obtiene los detalles del juego desde la base de datos
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}
