import styled from "styled-components";

export const _LandingPage = styled.div`
    position: relative;
    background-color: #ffffff;
`

export const _Container = styled.div`
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

export const _Info = styled.div`
    width: 35%;
    float: left;
    margin-top: 130px;
    h1 {
        font-size: 44px;
        margin: 0 0 20px;
        line-height: 1.4;
        color: #5d5d5d;
    }
    p {
        margin: 0;
        line-height: 1.6;
        font-size: 15px;
        color: #5d5d5d;
    }
    button {
        border: 0;
        border-radius: 20px;
        padding: 12px 30px;
        margin-top: 30px;
        cursor: pointer;
        color: #FFF;
        background-color: #6c63ff;
    }
`

export const _ImageContainer = styled.div`
    width: 50%;
    float: right;
    margin-top: 35px;
    img {
        max-width: 100%;
    }
`

export const _Clearfix = styled.div`
    clear: both;
`