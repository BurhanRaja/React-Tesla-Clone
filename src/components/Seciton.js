import React from 'react'
import styled from 'styled-components'

const Seciton = () => {
    return (
        <Wrap>
            <ItemText>
                <h1>Model 3</h1>
                <br/>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>

                <ButtonGroup>
                    <LeftButton>
                        Custom Order
                    </LeftButton>
                    <RightButton>
                        Existing Inventory
                    </RightButton>
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
        </Wrap>
    )
}

export default Seciton

const Wrap = styled.div({
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(/images/model-s.jpg)"
})

const ItemText = styled.div({
    padding: "13vh",
})

const ButtonGroup = styled.div({
    marginTop: "42vh"
})
const LeftButton = styled.button({
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
const RightButton = styled.button({
    backgroundColor: "#f9f8f8",
    color: "black",
    padding: "12px 70px",
    textTransform: "uppercase",
    borderRadius: "100px",
    fontSize: "12px",
    fontWeight: "bold",
    border: "none",
    opacity: "0.85",
    margin: "7px 7px",
    cursor: "pointer"
})

const DownArrow = styled.img({
    marginTop: "4vh",
    height:"40px",
    animation:"animateDown infinite 1.5s",
    overflowX:"hidden"
})

// const Buttons = styled.button({
//     // margin: "2px"
// })