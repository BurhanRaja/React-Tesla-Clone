import React from 'react'
import styled from 'styled-components'
import Seciton from './Seciton'

const Home = () => {
    return (
        <Container>
            <Seciton />
        </Container>
    )
}

export default Home

const Container = styled.div({
    height: "100vh",
})