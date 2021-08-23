import * as React from "react"
import styled from "styled-components"
import logo1 from "../images/benefit-icon-01.png"
import logo2 from "../images/benefit-icon-02.png"
import logo3 from "../images/benefit-icon-03.png"

const Benefits = () => {
  return (
    <BenefitsContainer>
        <TitleHead>Benefits of Odigo</TitleHead>
        <Wrapper>
            <Wrap>
                <Logo src={logo1}/>
                <Title>Welcome to Odigo!</Title>
                <Paragraph>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</Paragraph>
            </Wrap>
            <Wrap>
                <Logo src={logo2}/>
                <Title>Your Personal Japan guide</Title>
                <Paragraph>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</Paragraph>
            </Wrap>
            <Wrap>
                <Logo src={logo3}/>
                <Title>Promoting Local Businesses</Title>
                <Paragraph>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</Paragraph>
            </Wrap>
        </Wrapper>
    </BenefitsContainer>
  )
}

export default Benefits

const BenefitsContainer = styled.div `
    display:flex;
    flex-direction:column;
    margin: 5vw;
    margin-top:-120px;
    background:white;
    box-shadow:0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    padding:30px;
`
const TitleHead = styled.h2 `

`

const Wrapper = styled.div `
    display:flex;
    margin-top:50px;
`

const Wrap = styled.div `

`

const Logo = styled.img `
    width:25%;
`

const Title = styled.h4 `

`

const Paragraph = styled.p `

`