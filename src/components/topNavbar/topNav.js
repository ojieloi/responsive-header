import { IoLocationSharp, IoShieldCheckmarkSharp, IoPerson, IoCart } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";
import './topNav.scss';

function TopNav() {

    // Icon style component
    const iconsStyle = {
        color: '#fff',
        fontSize: 20,
    }

    return (
        <div className='top'>
            {/* Left side */}
            {/* Language */}
            <a href='/#'><span role='img'>🇺🇸</span><p>EN</p></a>

            {/* Right side */}
            {/* Icon Links */}
            <div>
                <a href='/#'><span role='img'><IoShieldCheckmarkSharp style={iconsStyle} /></span></a>
                <a href='/#'><span role='img'><BsQuestionCircleFill style={iconsStyle} /></span></a>
                <a href='/#'><span role='img'><IoLocationSharp style={iconsStyle} /></span></a>
                <a href='/#'><span role='img'><IoPerson style={iconsStyle} /></span></a>
                <a id='cart' href='/#'><span role='img'><IoCart style={iconsStyle} /></span><p>3</p></a>
            </div>
        </div>
    );
}

export default TopNav;
