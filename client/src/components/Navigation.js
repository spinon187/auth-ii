import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';



const NavBar = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    div {
        border-bottom: 1px solid white;
        background-color: #666;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        color: white;
        a {text-decoration: none;};
        a:visited {
            
            color: white;
        }
        a:hover, h2:hover{
            text-decoration: underline;
            cursor: pointer;
        }
        a, h2 {
            font-size: 1.6rem;
            font-weight: bold;
            font-family: "Source Sans Pro", Helvetica, sans-serif;
        }
    }


`;





const Navigation = props => {

    const navSwap = props.loggedIn === false 
        ? <Link to='/'>log in</Link>
        : <><Link to='/'>home</Link> <h2 onClick={props.logout}>log out</h2></>

    const signSwap = props.loggedIn === false
        && <NavLink to='/register' activeClassName='inUse'>sign up</NavLink>
    
    return(
        <NavBar>
            <div>
                {navSwap}              
                {signSwap}
            </div>
        </NavBar>
    )
}

export default Navigation;