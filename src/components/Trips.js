import * as React from "react"
import styled from "styled-components"
import desti1 from "../images/fuji.jpg"
import desti2 from "../images/kyoto.jpg"
import desti3 from "../images/tokyo.jpg"
import desti4 from "../images/niigata.jpg"
import desti5 from "../images/sappor.jpg"

const Trips = () => {
  return (
    <TripsContainer>
        <TitleHead>Get inspired for your next trip</TitleHead>
        <Line />
        <Wrapper>
            <Wrap>
                <WrapDestination>
                    <Destination src={desti1} height="250" />
                    <Title>Mount Fuji</Title>
                </WrapDestination>
                <WrapDestination>
                    <Destination src={desti2} height="250" />
                    <Title>Kyoto</Title>
                </WrapDestination>
            </Wrap>
            <Wrap>
                <WrapDestination2>
                    <Destination src={desti3} height="250" />
                    <Title>Tokyo</Title>
                </WrapDestination2>
                <WrapDestination2>
                    <Destination src={desti4} height="250" />
                    <Title>Niigata</Title>
                </WrapDestination2>
                <WrapDestination2>
                    <Destination src={desti5} height="250" />
                    <Title>Sappor</Title>
                </WrapDestination2>
            </Wrap>
        </Wrapper>
    </TripsContainer>
  )
}

export default Trips

const TripsContainer = styled.div `
    display:flex;
    flex-direction:column;
    margin: 5vw;
`
const TitleHead = styled.h2 `

`
const Title = styled.h2 `
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
    
`

const Wrap = styled.div `
    display:flex;
    margin-bottom:20px;
`

const WrapDestination = styled.div `
    flex:50%;
    margin:10px;
    background:rgba(0,0,0,0.7);
`

const WrapDestination2 = styled.div `
    flex:33.3%;
    margin:10px;
    background:rgba(0,0,0,0.7);
`

const Destination = styled.img `
    width:100%;
    opacity:0.7;
`