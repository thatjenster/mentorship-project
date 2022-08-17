import { 
    _Nav,
    _HeaderArea,
    _Logo,
    _NavLink,
} from './styles'

const Navbar = () => {
    return (
        <_Nav>
            <_HeaderArea>
                <_Logo>Mentorship Program</_Logo>
                <_NavLink>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Login</li>
                </_NavLink>
            </_HeaderArea>
        </_Nav>
    )
}
 
export default Navbar