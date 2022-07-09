import styled from 'styled-components'
import logo from '../../icons/gamer-logo.png'
import Footer from '../Footer/Footer'
import images from './images.js'

import ImgCarousel from '../Carousel/ImgCarousel'
import GamesCards from '../GamesCards/GamesCards'
import SelectGenre from '../SelectGenres/SelectGenre'

export default function Home() {
  return (
    <StyledExt>
      <NavbarDiv>
        <DivImagen src={logo} alt='img' />
        <TitleDiv>The Free Games Web</TitleDiv>
      </NavbarDiv>
      <DivLine></DivLine>
      <DivContainer>
        <ImgCarousel images={images} />
      </DivContainer>
      <DivLine></DivLine>
      <StyledGeneral>
        <GenreDiv>
          <SelectGenre />
        </GenreDiv>
        <GamesCards />
        {/* <DivLine></DivLine> */}
      </StyledGeneral>
      <Footer />
    </StyledExt>
  )
}

const StyledExt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  background-color: #0c3658;
`

const NavbarDiv = styled.div`
  display: flex;
  margin: 0 2em 0 2em;
  height: 100px;
  width: 100%;
  padding: 0 1.5em;
  justify-content: space-between;
  align-items: center;
`

const DivImagen = styled.img`
  width: 50px;
  object-fit: cover;
`

const TitleDiv = styled.h1`
  margin: auto;
  color: white;
`

const StyledGeneral = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GenreDiv = styled.div`
  width: 50%;
  min-width: 300px;
  margin: 10px;
`

const DivContainer = styled.div`
  width: 95%;
  border-radius: 0.8em;
  object-fit: cover;
  overflow: hidden;
  margin: 2em 0 3em 0;
  color: white;
`

const DivLine = styled.div`
  width: 95%;
  height: 2px;
  background-color: #d0ced0;
  margin: 0.5em 0;
`
