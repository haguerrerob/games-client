import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectedListAction } from '../../redux/genresListDuck'

import Select from 'react-select'

const SelectGenre = () => {
  const dispatch = useDispatch()

  const gamesGenres = useSelector((store) => store.genres.genres)
  const options = gamesGenres.map((e) => ({
    value: e.genretype,
    label: e.genretype
  }))

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: '#023950',
      borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
      boxShadow: state.isFocused ? null : null,
      color: 'black'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'white'
    }),
    input: (provided) => ({
      ...provided,
      color: 'white'
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'white'
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isFocused ? 'gray' : '#023950'
    })
  }

  const [selectedGenres, setSelectedGenres] = useState([])

  useEffect(() => {
    const selecteds = selectedGenres.map((element) => element.value)
    dispatch(selectedListAction(selecteds))
  }, [dispatch, selectedGenres])

  return (
    <Select
      options={options}
      isMulti
      placeholder='Select Games by Multiple Genres...'
      onChange={setSelectedGenres}
      autoFocus
      styles={customStyles}
    />
  )
}

export default SelectGenre
