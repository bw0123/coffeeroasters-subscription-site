import Logo from '../assets/icons/Logo'

function Header() {
    return(
        <header class='header-container'>
                <Logo class='logo' />
                <nav class='nav-menu'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Create Your Plan</li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header