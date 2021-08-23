import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../images/odigo-logo-images.png"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/"><Logo src={logo} alt="Hero"/></NavLink>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background:transparent;
  height:80px;
  display:flex;
  justify-content:space-between;
  z-index:100;
  position:absolute;
  margin:0 50px;
`
const NavLink = styled(Link)`
  display:flex;
  align-items:center;
`

const Logo = styled.img `
  width:50%;
`