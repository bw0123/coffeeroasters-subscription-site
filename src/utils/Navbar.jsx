import Coffeeroasters from '../assets/icons/Logo'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
    return(
        <header class='nav-footer-container'>
            <Coffeeroasters />
                <nav class='nav-menu'>
                    <ul class='nav-menu-ul'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/about'>About Us</CustomLink>
                        <CustomLink to='/createplan'>Create Your Plan</CustomLink>
                    </ul>
                </nav>
        </header>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return(
        <li class={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

