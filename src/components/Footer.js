import * as React from "react"
import styled from "styled-components"
import logo from "../images/odigo-logo-images.png"

const Footer = () => {
  return (
    <Foot>
      <NavLink to="/"><Logo src={logo} alt="Hero"/></NavLink>
    </Foot>
  )
}

export default Footer

const Foot = styled.footer`
  background:black;
  display:flex;
  height:10vh;
  justify-content:center;
  align-items:center;
`
const NavLink = styled.div`

`

const Logo = styled.img `
  width:50%;
`