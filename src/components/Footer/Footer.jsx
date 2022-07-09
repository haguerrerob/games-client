import React from 'react'
import styled from 'styled-components'

import LinkedIn from '../../icons/linkedin-white.png'
import GitHub from '../../icons/github.png'

const Footer = () => {
  return (
    <StyledFooter>
      <DivLine></DivLine>

      <StyledLink>
        <div>Armando Guerrero 2022</div>
        <a
          href='https://www.linkedin.com/in/armandoguerrerobonilla/'
          target='_blank'
          rel='noreferrer'>
          <StyledLinkedInIcon src={LinkedIn} alt='logo' />
        </a>
        <a
          href='https://github.com/haguerrerob'
          target='_blank'
          rel='noreferrer'>
          <StyledLinkedInIcon src={GitHub} alt='logo' />
        </a>
      </StyledLink>
      <StyledLink>
        Data and characters:
        <a href='https://www.freetogame.com/' target='_blank' rel='noreferrer'>
          {' '}
          Freetogame.com
        </a>
      </StyledLink>
    </StyledFooter>
  )
}

export default Footer

const StyledLinkedInIcon = styled.img`
  width: 20px;
  object-fit: cover;
  margin: 0 8px;
`

const StyledLink = styled.div`
  display: flex;
  /* flex-flow: row; */
  align-items: center;
  justify-content: center;
  margin: 0.5em;

  a {
    color: rgba(102, 247, 113, 1);
    /* text-decoration: none; */
  }
`

const StyledFooter = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  padding: 1em;
  font-size: 1em;
  /* font-weight: bold; */
  font-family: 'Roboto', sans-serif;
  /* font-style: italic; */
  letter-spacing: 1px;
  /* text-transform: uppercase; */
  text-decoration-color: #d0ced0;
  text-decoration-style: solid;
`

const DivLine = styled.div`
  width: 95%;
  height: 2px;
  background-color: #d0ced0;
  margin: 0.5em 0;
`
