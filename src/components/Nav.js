import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavigationBar = styled.nav`
  padding: 8px 4px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 4px;
  border-radius: 5px;
  box-shadow: 0 16px 50px -5px rgba(0, 0, 0, 1);
  &.active {
    background: white;
    transition: background 0.5s linear;
  }
`

export default function Nav() {
  return (
    <StyledNavigationBar>
      <StyledNavLink exact to='/'>
        Home
      </StyledNavLink>
      <StyledNavLink to='/form'>Create</StyledNavLink>
    </StyledNavigationBar>
  )
}
