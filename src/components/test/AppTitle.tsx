import React from 'react'
import styled from 'styled-components'

const Title: React.FC = styled.h1`
  color: red;
  font-size: 50px;
`

const AppTitle: React.FC = () => {
  return <Title>message</Title>
}

export default AppTitle