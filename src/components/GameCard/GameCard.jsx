import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function GameCard({ data }) {
  const apiLink = `https://heroesbackend.herokuapp.com`

  const [imagen, setImagen] = useState(null)

  useEffect(() => {
    const funPoke = () => {
      const imgName = data.thumbnail_half.replace('/app/public/', '')
      setImagen(`${apiLink}/${imgName}`)
    }
    funPoke()
  }, [data, apiLink])

  return (
    <DivCard>
      <ItemLink to={`/details/${data.id}`}>
        <DivImagen src={imagen} alt='img' />
      </ItemLink>
      <DivTexta>{data.data.title}</DivTexta>
      <DivTextb>{data.data.platform}</DivTextb>
    </DivCard>
  )
}

const DivCard = styled.div`
  display: flex;
  width: 255px;
  height: 180px;
  flex-direction: column;
`

const DivImagen = styled.img`
  width: 255px;
  height: 150px;
  object-fit: contain;
  align-self: center;
  // margin-bottom: 0.4em;
  border-radius: 0.8em;
  transition: all 0.4s;
  :hover {
    transform: scale(1.05);
  }
`

const DivTexta = styled.div`
  align-self: start;
  color: white;
  font-size: 1em;
  font-weight: bold;
`

const DivTextb = styled.div`
  align-self: start;
  color: #d0ced0;
  font-size: 0.7em;
`

const ItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
`
