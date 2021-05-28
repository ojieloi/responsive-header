import './bottomNav.scss';
import BrandLogo from '../../images/brand.png';
import TopNav from '../topNavbar/topNav';
import MobileNav from '../mobileNavbar/mobileNav';

// Icons
import { IoPerson, IoCart, IoMenuSharp, IoSearch } from "react-icons/io5";
import { useState } from 'react';

function BottomNav() {

    // Icon style component
    const iconsStyle = {
        color: '#000',
        cursor: 'pointer',
        fontSize: 20,
        marginLeft: 12,
        marginRight: 12,
    }

    // Submenu Navigation Links
    // Solutions By Industry, Solutions By Process, etc...
    let submenuLinks = ['Solutions By Industry', 'Solutions By Process', 'Software Solutions', 'Services'];
    let submenuList = [];
    submenuLinks.forEach((item, index) => {
        submenuList.push(<li key={index}>
            <p>{item}</p>
        </li>)
    })

    // Sets menu and hamburger default state to false = not open
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    // If 'menuIsOpen' = false, and 'Solutions' is clicked, open menu
    // Else if 'menuIsOpen' = true and 'Solutions' is clicked, close menu
    const menuClicked = () => {
        if (menuIsOpen === false) {
            openMenu();
        } else if (menuIsOpen === true) {
            closeMenu();
        }
    }

    // If 'hamburgerIsOpen' = false, and Hamburger is clicked, open mobile menu
    // Else if 'hamburgerIsOpen' = true and Hamburger is clicked, close mobile menu
    const hamburgerClicked = () => {
        if (hamburgerIsOpen === false) {
            openHamburger();
        } else if (hamburgerIsOpen === true) {
            closeHamburger();
        }
    }

    // 
    // 

    // Function to open Solutions submenu
    // Is called if 'menuIsOpen' is set to false, then sets it to true
    function openMenu() {
        document.getElementsByClassName('menu-content')[0].style.height = '250px';
        setMenuIsOpen(true);

        // Changes text color to red when active
        document.getElementsByClassName('menu-link')[0].style.color = '#b81830';
    }

    // Function to close Solutions submenu
    // Is called if 'menuIsOpen' is set to true, then sets it to false
    function closeMenu() {
        document.getElementsByClassName('menu-content')[0].style.height = '0px';
        setMenuIsOpen(false);

        // Changes text color back to dark text when inactive
        document.getElementsByClassName('menu-link')[0].style.color = '#181818';
    }

    // Function to close Solutions submenu if browser window <= 900px
    // Function to close hamburger mobile menu if browser window > 900px
    // Helps incase user forgets to close menus before switching between layouts
    window.onresize = function () {
        var w = window.outerWidth;
        if (w <= 900 && menuIsOpen === true) {
            closeMenu();
        } else if (w > 900 && hamburgerIsOpen === true) {
            closeHamburger();
        }
    }

    // 
    // 

    // Function to open Hamburger Menu in mobile mode
    // Is called if 'hamburgerIsOpen' is set to false, then sets it to true
    function openHamburger() {
        document.getElementsByClassName('mobile')[0].style.left = '0%';
        setHamburgerIsOpen(true);
    }

    // Function to close Hamburger Menu in mobile mode
    // Is called if 'hamburgerIsOpen' is set to true, then sets it to false
    function closeHamburger() {
        document.getElementsByClassName('mobile')[0].style.left = '-100%';
        setHamburgerIsOpen(false);
    }

    return (
        <div className='container'>

            {/* Top Navbar Component */}
            <div className='navbar-top'>
                <TopNav />
            </div>

            {/*  */}
            {/*  */}

            <div className='navbar-bottom'>

                {/* Left side */}
                {/* Navigation links and brand logo */}
                <div>

                    {/* Hamburger menu button, opens mobile menu when clicked */}
                    {/* Only visible when window screen shrinks to mobile size */}
                    <span className='menu' role='img'><IoMenuSharp style={iconsStyle} onMouseUp={() => { hamburgerClicked() }} /></span>

                    {/* Brand */}
                    <img src={BrandLogo} alt='Lincoln Electronics Logo' />

                    {/* Dropdown Menu */}
                    <div className='menu'>

                        {/* Button that opens Dropsown Menu Contents when clicked */}
                        <p className='link menu-link' onClick={() => { menuClicked() }}>Solutions</p>

                        {/* Dropdown Menu contents */}
                        <div className='menu-content'>
                            <ul>
                                {submenuList}
                            </ul>
                        </div>
                    </div>

                    {/* Remaining nav links */}
                    <p className='link'>Products</p>
                    <p className='link'>Automation</p>
                    <p className='link'>Education</p>
                    <p className='link'>Resources</p>
                </div>

                {/*  */}
                {/*  */}

                {/* Right side */}
                {/* Search, user, and cart icons */}
                <div>
                    <span className='search' role='img'><p id='search'>Search</p><IoSearch style={iconsStyle} /></span>
                    <span className='user' role='img'><IoPerson style={iconsStyle} /></span>
                    <span className='cart' role='img'><IoCart style={iconsStyle} /><p id='cart'>3</p></span>
                </div>
            </div>

            {/*  */}
            {/*  */}

            {/* Mobile Navbar Component */}
            {/* Passes 'closeFunction' prop to component so that, when clicked, closes menu if open */}
            <div className='mobile'>
                <MobileNav closeFunction={() => { hamburgerClicked() }} />
            </div>
        </div>
    );
}

export default BottomNav;