import './App.scss';

// Components
import BottomNav from './components/bottomNavbar/bottomNav';

function App() {
    return (
        <div className="app">
            <div className='container'>

                {/* Navbar */}
                <nav className="navbar">
                    {/* Main Navbar */}
                    {/* Compiled of all components for top, main, and mobile navbars */}
                    <BottomNav />
                </nav>

                {/* Extra space to show vertical scrolling is active */}
                <div className='extra'></div>

            </div>
        </div>
    );
}

export default App;
