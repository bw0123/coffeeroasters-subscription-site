import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import LogoWhite from '../assets/icons/LogoWhite'
import IconFb from '../assets/icons/IconFb'
import IconTwitter from '../assets/icons/IconTwitter'
import IconIg from '../assets/icons/IconIg'

export default function Footer() {
    return(
        <footer class='nav-footer-container'>
            <LogoWhite />
                <nav class='nav-menu' id='footer-links-container'>
                    <ul class='nav-menu-ul'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/about'>About Us</CustomLink>
                        <CustomLink to='/createplan'>Create Your Plan</CustomLink>
                    </ul>
                </nav>
                <nav class='nav-menu' id='footer-social-container'>
                    <ul class='nav-menu-ul'>
                        <li><IconFb /></li>
                        <li><IconTwitter /></li>
                        <li><IconIg /></li>
                    </ul>
                </nav>
        </footer>
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

