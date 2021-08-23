import * as React from "react"
import styled from "styled-components"
import background from "../images/hero-images.png"

const Hero = () => {
  return (
    <HeroContainer to="/">
        <HeroContent>
            <HeroItems>
                <HeroH1>Discover Amazing Place in Japan</HeroH1>
                <HeroP>
                    Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door.
                </HeroP>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div `
    display:flex;
    justify-content:center;
    align-items:center
    width:100%;
    background-image: url(${background});
    height:100vh;
    background-position:center;
`
const HeroContent = styled.div `
    
`

const HeroItems = styled.div `
    color:white;
    margin-top:40vh;
    width:40%;
    margin-left:5vw;
`
const HeroH1 = styled.h1 `

`
const HeroP = styled.p `

`