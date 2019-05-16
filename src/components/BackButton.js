import React from 'react'
import styled from 'styled-components'

const StyledBackButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 10px;
  font-size: 3em;
  cursor: pointer;
`
export default function BackButton() {
  return (
    <StyledBackButton onClick={() => window.history.back()}>
      <span role='img' aria-label='backbutton'>
        👈
      </span>
    </StyledBackButton>
  )
}
