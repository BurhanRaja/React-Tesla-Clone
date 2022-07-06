import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <Container>
            <a href='/'>
                <img src="/images/logo.svg" style={{"height": "16px", "width": "122px"}} alt="Tesla" />
            </a>

            <Menu>
                <li><a href="/">Model S</a></li>
                <li><a href="/">Model 3</a></li>
                <li><a href="/">Model Y</a></li>
                <li><a href="/">Model X</a></li>
                <li><a href="/">Solar Panels</a></li>
                <li><a href="/">Solar Roofs</a></li>
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
                <MenuIcon style={{"cursor":"pointer", "fontWeight":"600"}} />
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div({
    minHeight: "60px",
    position:"fixed",
    display: "flex",
    justifyContent:"space-between",
    alignItems: "center",
    padding:"0 20px",
    top:"0",
    left:"0",
    right:"0"
})


const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    margin-left: 8%;

    li {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }
    a{
        font-size: 14px;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
        font-size: 14px;
    }
`