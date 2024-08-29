import logo from '/public/logo-white.png'
import { slide as Menu } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link'
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom'


var styles = {
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },

    bmCross: {
        // position: "relative",
        // marginTop: "-150px",
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        // position: 'fixed',
        height: '120%',
        marginTop: "-158px",
    },
    bmMenu: {
        // marginTop: "-157px",
        width: "500px",
        background: "linear-gradient(to bottom, #1c1c1c, #1a1925, #17152e, #121137, #0a0d40)",// 'linear-gradient(to bottom, #000000, #130008, #1b0014, #1f011e, #1e042b, #190d34, #11143d, #001a45, #002146, #002744, #002c3f, #00303b)',
        // background: "rgb(2, 0, 36) linear-gradient(90deg, rgba(2, 0, 36, 1) 0 %, rgba(0, 9, 135, 1) 35 %, rgba(2, 76, 92, 1) 100 %)",
        // background: "",
        // padding: '2.5em 1.5em 0',
        fontSize: '1.3em'
    },

    bmOverlay: {
        background: 'rgba(0, 0, 0, 0)'

    }
}




export const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="pl-8 pt-8" >
            <img
                alt="Logo"
                className="cursor-pointer"
                src={logo}
                width="200"
                height="150"
                onClick={() => navigate('/')}
            ></img>
            <Menu right styles={styles}>
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
                    <HashLink smooth to="/#products">
                        Produts Created
                    </HashLink>
                </div>
                <div>
                    <HashLink smooth to="/#project-experience">
                        Project Experience
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
