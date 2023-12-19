
import logo from '../assets/logo-white.png'
import { slide as Menu } from 'react-burger-menu'
import "../Header.css"
export const Header = () => {


    return <div className='pb-16'>
        <img  src={logo} width="200" height="150"></img>
        <Menu right color="yellow">
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    </div>
}