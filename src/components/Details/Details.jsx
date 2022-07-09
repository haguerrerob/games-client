import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// import ImgCarousel from '../Carousel/ImgCarousel'
import Footer from '../Footer/Footer'

import logo from '../../icons/gamer-logo.png'

export default function Details(props) {
  const detailsData = useSelector((store) => store.games.games)
  const game = detailsData.find(
    (el) => el.id === parseInt(props.match.params.id, 10)
  )

  return (
    <DivContenedor>
      <NavbarDiv>
        <DivA>
          <DivImagen src={logo} alt='logo' />
          <TitleDiv to={`/`}>The Free Games Web</TitleDiv>
        </DivA>
        <Button88 to={`/`}>Back to Games List</Button88>
      </NavbarDiv>

      <DivBackgroundImage src={`${game.thumbnail}`}>
        <DivBackgroundGradient />
      </DivBackgroundImage>

      <Div1erNivel>
        <StyledContainerLeft>
          <DivImageB src={`${game.thumbnail}`} alt='img' />
          <Button88
            to={{ pathname: `${game.data.game_url}` }}
            target='_blank'
            rel='noopener noreferrer'>
            Play "{game.data.title}" Now
          </Button88>
        </StyledContainerLeft>

        <StyledContainerRight>
          <DivText>
            <Divparraf>
              <DivTitle> About {game.data.title}:</DivTitle>
              <div>{game.data.short_description}</div>
              <br></br>
              <div>· Gener: {game.data.genre}</div>
              <div>· Platform: {game.data.platform}</div>
              <div>· Publisher: {game.data.publisher}</div>
              <div>· Developer: {game.data.developer}</div>
              <div>· Release date: {game.data.release_date}</div>
            </Divparraf>
          </DivText>
        </StyledContainerRight>
      </Div1erNivel>
      {game.data.screenshots.length > 0 ? (
        <StyledDivImagesbyGroup>
          ScreenShots
          <DivImagesbyGroup>
            {game.data &&
              game.data.screenshots.map((item, index) => {
                return <ImgGroup src={`${item.image}`} alt='img' key={index} />
              })}
          </DivImagesbyGroup>
        </StyledDivImagesbyGroup>
      ) : null}

      <Footer />
    </DivContenedor>
  )
}

/* CSS */
const StyledDivImagesbyGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  font-size: 1.2em;
  /* text-transform: uppercase; */
  color: white;
`

const DivContenedor = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const NavbarDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 1200px;
  padding: 10px;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: #0c3658;
  @media (min-width: 640px) {
    flex-direction: row;
  } ;
`

const TitleDiv = styled(Link)`
  font-size: 1.5em;
  color: white;
  text-decoration: none;
`

const DivA = styled.div`
  display: flex;
  align-items: center;
`

const Div1erNivel = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: max-content;
  gap: 0.5em;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  } ;
`

const StyledContainerLeft = styled.div`
  display: grid;
  padding: 1.2em;
  grid-template-columns: fit-content(320px);
  grid-auto-rows: max-content;
  align-items: center;
  justify-items: center;
  gap: 1em;
  border-right: 1px solid white;
`

const DivImageB = styled.img`
  width: 100%;
  min-width: 300px;
  max-width: 320px;
`

const StyledContainerRight = styled.div`
  height: 100%;
  padding: 0 1.2em;
`

const DivImagen = styled.img`
  width: 50px;
  margin-right: 10px;
  object-fit: cover;
`

const DivBackgroundImage = styled.div`
  width: 100%;
  height: 36rem;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: 0.2;
  position: absolute;
`

const DivBackgroundGradient = styled.div`
  width: 100%;
  height: 101%;
  background: linear-gradient(
      90deg,
      #0c3658 0%,
      rgba(35, 46, 46, 0.1) 16.15%,
      rgba(35, 46, 46, 0.1) 80.21%,
      #0c3658 100%
    ),
    linear-gradient(
      180deg,
      rgb(39, 43, 48) 0%,
      rgba(0, 0, 0, 0.58) 33.85%,
      #0c3658 100%
    );
`

const DivImagesbyGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
const ImgGroup = styled.img`
  max-width: 280px;
  max-height: 280px;
  object-fit: cover;
  margin: 10px auto;
`

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  color: white;
  @media (min-width: 640px) {
    font-size: 1.2em;
  }
`
const DivTitle = styled.div`
  text-decoration: underline;
  font-style: italic;
  align-self: start;
  font-size: 2em;
  margin-bottom: 2%;
`

const Divparraf = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`

const Button88 = styled(Link)`
  max-width: 320px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.3em 1em 0.3em 1em;
  color: white;
  text-decoration: none;
  background: linear-gradient(
    0deg,
    rgba(20, 167, 62, 1) 0%,
    rgba(102, 247, 113, 1) 100%
  );
  border: none;
  border-radius: 8px;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
  }
  :active {
    box-shadow: 0 0.3em 1em -0.5em #14a73e98;
  }
`
