import React from 'react'
import styled from 'styled-components'
import Seciton from './Seciton'

export default function Home() {
    return (
        <Container>
            <Seciton
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
                arrow="block"
            />
            <Seciton
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
                arrow="none"
            />
            <Seciton
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
                arrow="none"
            />
            <Seciton
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
                arrow="none"
            />
            <Seciton
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtn="Order Now"
                rightBtn="Learn More"
                arrow="none"
            />
            <Seciton
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtn="Order Now"
                rightBtn="Learn More"
                arrow="none"
            />
        </Container>
    )
}

const Container = styled.div({
    height: "100vh",
})