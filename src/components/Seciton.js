import React from 'react'
import styled from 'styled-components'

export default function Seciton(props) {
    return (
        <Wrap backImg={props.backgroundImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>

            <ButtonGroup>
                <LeftButton>
                    {props.leftBtn}
                </LeftButton>
                {props.rightBtn && <RightButton>
                    <span>{props.rightBtn}</span>
                </RightButton>}
            </ButtonGroup>
            <DownArrow style={{ "display": `${props.displayBtn}` }} src="/images/down-arrow.svg" />
        </Wrap>
    )
}

const Wrap = styled.div({
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContext: "space-between",
    alignItems: "center",
    backgroundImage: props => `url("/images/${props.backImg}")`,
})

const ItemText = styled.div({
    padding: "15vh",
})

const ButtonGroup = styled.div({
    marginTop: "38vh"
})
const LeftButton = styled.a({
    backgroundColor: "#2a2a2a",
    color: "white",
    padding: "12px 80px",
    textTransform: "uppercase",
    borderRadius: "100px",
    fontSize: "12px",
    fontWeight: "bold",
    border: "none",
    opacity: "0.85",
    margin: "7px 7px",
    cursor: "pointer"
})

const RightButton = styled(LeftButton)`
    padding: 12px 70px;
    background-color: white;
    color: #2a2a2a;
    opacity:0.75;
`


const DownArrow = styled.img({
    marginTop: "13vh",
    height: "40px",
    animation: "animateDown infinite 1.5s",
    overflowX: "hidden",
    cursor:"pointer"
})