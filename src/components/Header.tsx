import logo from '../assets/logo-white.png'
import { slide as Menu } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link'
import '../Header.css'
export const Header = () => {
    return (
        <div className="pb-16">
            <img src={logo} width="200" height="150"></img>
            <Menu right>
                <div>
                    <HashLink smooth to="/path#home">
                        Home
                    </HashLink>
                </div>
                <div>
                    <HashLink smooth to="/path#about-me">
                        About me
                    </HashLink>
                </div>
                <div>
                    <HashLink smooth to="/path#skills">
                        Skills
                    </HashLink>
                </div>
                {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
            </Menu>
        </div>
    )
}
