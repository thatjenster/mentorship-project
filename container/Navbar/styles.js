import styled from "styled-components";

export const _Nav = styled.nav`
    width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin: auto; 
`

export const _HeaderArea = styled.div`
    display: flex;
    padding: 25px 0 0;
    position: relative;
`

export const _Logo = styled.div`
    text-transform: uppercase;
    font-style: italic;
    margin-top: 10px;
    font-size: 19px;
    width: 300px;
    color: #5d5d5d;
`

export const _NavLink = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: right;
    li {
        display: inline-block;
        margin-left: 30px;
        color: #5d5d5d;
        cursor: pointer;
    }
    li:last-child {
        border: 0;
        border-radius: 20px;
        padding: 10px 18px;
        color: #FFF;
        background-color: #6c63ff;
    }
`