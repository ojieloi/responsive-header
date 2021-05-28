import { useState } from 'react';
import './mobileNav.scss';

// Icons
import { IoLocationSharp, IoShieldCheckmarkSharp, IoChevronForward, IoChevronBack, IoClose } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";

function MobileNav(props) {

    // Icon style
    const iconsStyle = {
        color: '#000',
        fontSize: 18,
    }

    // Main Menu Navigation Links
    // Products, Automation, etc...
    let navigatorLinks = ['Products', 'Automation', 'Education', 'Resources'];
    let navigatorList = [];
    navigatorLinks.forEach((item, index) => {
        navigatorList.push(
            <li key={index}>
                <p>{item}</p>
                <span id='mobile-icons' role='img'><IoChevronForward id='icon' style={iconsStyle} /></span>
            </li>)
    })

    // Solutions Sub Menu
    // Solutions By Industry, Process, etc...
    let solutionLinks = ['Solutions By Industry', 'Solutions By Process', 'Software Solutions', 'Services'];
    let solutionsList = [];
    solutionLinks.forEach((item, index) => {
        solutionsList.push(<li key={index}>
            <p>{item}</p>
            <span id='mobile-icons' role='img'><IoChevronForward id='icon' style={iconsStyle} /></span>
        </li>)
    })

    // Sets default menu state as false = not open
    // When user clicks 'Solutions' if 'menuIsOpen' = false, open
    // Else if 'menuIsOpen' = true, close
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const menuClicked = () => {
        if (menuIsOpen === false) {
            openMenu();
        } else if (menuIsOpen === true) {
            closeMenu();
        }
    }

    // Function to open Solutions submenu
    // Is called if 'menuIsOpen' is set to false, then sets it to true
    // Shifts main menu and Solutions submenu position to the left
    function openMenu() {
        document.getElementsByClassName('so-section')[0].style.left = '0';
        document.getElementsByClassName('navigator-links')[0].style.left = '-100%';
        setMenuIsOpen(true);
    }

    // Function to close Solutions submenu
    // Is called if 'menuIsOpen' is set to true, then sets it to false
    // Shifts main menu and Solutions submenu position back to original
    function closeMenu() {
        document.getElementsByClassName('so-section')[0].style.left = '100%';
        document.getElementsByClassName('navigator-links')[0].style.left = '0';
        setMenuIsOpen(false);
    }

    return (
        <div className='mobile-navbar'>

            {/* Menu Header */}
            {/* Menu text and close button */}
            <div className='header'>
                <p>Menu</p>
                <span role='img'><IoClose style={{ color: '#fff', cursor: 'pointer', fontSize: 24 }} onClick={props.closeFunction} /></span>
            </div>


            {/* Main Menu */}
            <div className='navigator'>

                <div className='navigator-links'>
                    <ul className='nav-section'>
                        {/* Solution nav link */}
                        <li className='link' onClick={() => { menuClicked() }}>
                            <p>Solutions</p>
                            <span role='img'><IoChevronForward style={iconsStyle} /></span>
                        </li>

                        {/* Remaining nav links from array */}
                        {/* Products, Automation, etc... */}
                        {navigatorList}
                    </ul>

                    {/* Help, Where to Buy / Rent, Safety, Language */}
                    <ul className='qa-section'>
                        <li className='link'>
                            <span role='img'><BsQuestionCircleFill style={iconsStyle} /></span>
                            <p>Help</p>
                            <span role='img'><IoChevronForward style={iconsStyle} /></span>
                        </li>
                        <li className='link'>
                            <span role='img'><IoLocationSharp style={iconsStyle} /></span>
                            <p>Where to Buy / Rent</p>
                        </li>
                        <li className='link'>
                            <span role='img'><IoShieldCheckmarkSharp style={iconsStyle} /></span>
                            <p>Safety</p>
                        </li>
                        <li className='link'>
                            <span role='img'>🇺🇸</span>
                            <p>EN</p>
                        </li>
                    </ul>
                </div>

                {/* Solutions Submenu */}
                <ul className='so-section'>
                    {/* Go Back Button */}
                    <li className='link' onClick={() => { menuClicked() }}>
                        <span id='mobile-icons' role='img'><IoChevronBack id='icon' style={iconsStyle} /></span>
                        <p>Go Back</p>
                    </li>

                    {/* Remaining submenu links from array */}
                    {/* Solutions by Process, Industry, etc... */}
                    {solutionsList}
                </ul>
            </div>
        </div>
    );
}

export default MobileNav;