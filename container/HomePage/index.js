import Image from 'next/image'
import Login from '../../components/Login'
import { 
    _LandingPage, 
    _Container,
    _HeaderArea,
    _Logo,
    _NavLink,
    _Info,
    _ImageContainer,
    _Clearfix } from './styles'

const HomePage = () => {
    return (
        <_LandingPage>
            <_Container>
                <_Info>
                    <h1>Looking For A Mentor?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
                    <button>Button name</button>
                </_Info>
                <_ImageContainer>
                    <Image src="/homepage-hero.png" width="570" height="445" alt="homepage hero"/>
                </_ImageContainer>
                <_Clearfix></_Clearfix>
            </_Container>
            <Login/>
        </_LandingPage>
    )
}
 
export default HomePage