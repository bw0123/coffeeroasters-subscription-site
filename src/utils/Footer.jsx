import LogoWhite from '../assets/icons/LogoWhite'
import IconFb from '../assets/icons/IconFb'
import IconTwitter from '../assets/icons/IconTwitter'
import IconIg from '../assets/icons/IconIg'

function Footer() {
    return(
        <footer class='header-footer-container'>
            <LogoWhite />
                <nav class='nav-menu' id='footer-links-container'>
                    <ul class='nav-menu-ul'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Create Your Plan</li>
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

export default Footer