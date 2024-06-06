import logo from '/public/logo-white.png'
import { slide as Menu } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link'
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom'
export const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="pb-16">
            <img
                alt="Logo"
                className="cursor-pointer"
                src={logo}
                width="200"
                height="150"
                onClick={() => navigate('/')}
            ></img>
            <Menu right>
                <div>
                    <HashLink smooth to="/#home">
                        Home
                    </HashLink>
                </div>
                <div>
                    <HashLink smooth to="/#about-me">
                        About me
                    </HashLink>
                </div>
                <div>
                    <HashLink smooth to="/#skills">
                        Skills
                    </HashLink>
                </div>
                <div>
                    <HashLink smooth to="/#Social">
                        Social channels
                    </HashLink>
                </div>
                {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
            </Menu>
        </div>
    )
}
