import * as React from "react"
import styled from "styled-components"
import desti1 from "../images/fuji.jpg"
import desti2 from "../images/kyoto.jpg"
import desti3 from "../images/tokyo.jpg"
import desti4 from "../images/niigata.jpg"
import desti5 from "../images/sappor.jpg"

const TopPlaces = () => {
  return (
    <TripsContainer>
        <TitleHead>Today post top places to visit</TitleHead>
        <Line />
        <Wrapper>
            <Wrap>
                <WrapDestination>
                    <Destination src={desti1} height="250" />
                    <Title>NAGOYA</Title>
                    <Wrapper><Paragraph>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.</Paragraph></Wrapper>
                </WrapDestination>
                <WrapDestination>
                    <Destination src={desti2} height="250" />
                    <Title>NIIGATA</Title>
                    <Wrapper><Paragraph>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.</Paragraph></Wrapper>
                </WrapDestination>
                <WrapDestination>
                    <Destination src={desti2} height="250" />
                    <Title>OSAKA</Title>
                    <Wrapper><Paragraph>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.</Paragraph></Wrapper>
                </WrapDestination>
            </Wrap>
            <Wrap>
                <WrapDestination>
                    <Destination src={desti3} height="250" />
                    <Title>SAITAMA</Title>
                    <Wrapper><Paragraph>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.</Paragraph></Wrapper>
                </WrapDestination>
                <WrapDestination>
                    <Destination src={desti4} height="250" />
                    <Title>UENO</Title>
                    <Wrapper><Paragraph>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.</Paragraph></Wrapper>
                </WrapDestination>
                <WrapDestination>
                    <Destination src={desti5} height="250" />
                    <Title>SHIBUYA</Title>
                    <Wrapper><Paragraph>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.</Paragraph></Wrapper>
                </WrapDestination>
            </Wrap>
        </Wrapper>
    </TripsContainer>
  )
}

export default TopPlaces

const TripsContainer = styled.div `
    display:flex;
    flex-direction:column;
    margin: 5vw;
`
const TitleHead = styled.h2 `

`
const Title = styled.h4 `
    color:white;
    margin-top:-40px;
`

const Line = styled.hr `
    color:blue;
    border:solid 2px;
    width:30%;
    margin-bottom:20px;
`

const Wrapper = styled.div `
    background:white;
`

const Wrap = styled.div `
    display:flex;
    margin-bottom:10px;
`

const WrapDestination = styled.div `
    flex:33.3%;
    margin:10px;
    background:rgba(0,0,0,0.7);
`

const Paragraph = styled.p `
    margin-top:30px;
`

const Destination = styled.img `
    width:100%;
    opacity:0.7;
`