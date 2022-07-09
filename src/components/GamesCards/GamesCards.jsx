import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import './React-Paginate.css'

import GameCard from '../GameCard/GameCard'

import { useDispatch, useSelector } from 'react-redux'
import { getGamesAction } from '../../redux/gamesDuck'
import { getGenresAction } from '../../redux/genresDuck'

export default function GameCards() {
  const dispatch = useDispatch()

  const gamesData = useSelector((store) => store.games.games)
  const genresSelectedList = useSelector(
    (store) => store.selectList.selectedList
  )

  useEffect(() => {
    dispatch(getGamesAction())
    dispatch(getGenresAction())
  }, [dispatch])

  const [pageNumber, setPageNumber] = useState(0)
  const [filteredResults, setfilteredResults] = useState([])

  useEffect(() => {
    if (genresSelectedList.length > 0) {
      const gamesDataFilteredbyGenres = gamesData.filter((item) =>
        genresSelectedList.includes(item.data.genre)
      )
      setfilteredResults(gamesDataFilteredbyGenres)
    } else {
      setfilteredResults(gamesData)
    }
  }, [gamesData, genresSelectedList])

  const gamesPerPage = 12
  let pagesVisited = pageNumber * gamesPerPage
  const displayGames = filteredResults.slice(
    pagesVisited,
    pagesVisited + gamesPerPage
  )
  const pageCount = Math.ceil(filteredResults.length / gamesPerPage)
  return (
    <DivContenedor>
      <GeneralDiv>
        {displayGames &&
          displayGames.map((elem) => (
            <DivElement key={elem.id}>
              <GameCard data={elem} />
            </DivElement>
          ))}
      </GeneralDiv>
      <PagDiv>
        <ReactPaginate
          breakLabel='...' // breakLabel={<a href="">...</a>}
          previousLabel={'<'} // previousLabel={<a href="">&laquo;</a>}
          nextLabel={'>'} // nextLabel={<a href="">&raquo;</a>}
          pageCount={pageCount} // pageCount is the total number of pages
          onPageChange={(event) => setPageNumber(event.selected)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </PagDiv>
    </DivContenedor>
  )
}

const DivContenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GeneralDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const DivElement = styled.div`
  margin: 20px;
`

const PagDiv = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
`

// The filter() method creates a new array with all elements that pass the test.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.
// The includes() method does not change the original array.
