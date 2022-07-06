import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
                <SideMenu />
            </RightMenu>

            <BurgerNav>
                <CloseWrapper>
                    <CloseIcon style={{"cursor":"pointer"}} />
                </CloseWrapper>
            <li><a href="#">Existing Inventory</a></li> 
            <li><a href="#">Used Inventory</a></li> 
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
            </BurgerNav>
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
    right:"0",
    zIndex:"1",
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

    @media(max-width: 1045px) {
        a {
            font-size: 12px;
        }
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

    @media(max-width: 1045px) {
        a {
            font-size: 12px;
        }
    } 
`

const SideMenu = styled(MenuIcon)`
    cursor: pointer; 
    fontWeight: 600;

`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    width: 250px;
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: start;
    overflow-y:scroll;
    z-index: 10;

    li {
        padding: 15px 0;
    }
    a {
        font-weight: 600;
    }

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
` 