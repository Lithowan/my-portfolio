import React from 'react'
import styled from 'styled-components'

export default function Footer () {
  const Footer = styled.div`
    text-align: center;
    color: #f3c677;
    border-radius: 20px;
    padding: 1%;
    margin-top: 5%;
  `

  Footer.displayName = 'Footer'

  return (
    <Footer>
      <p>
        Powered by React, Styled Components, Node.js, Express, Heroku and the
        github API
      </p>
    </Footer>
  )
}
