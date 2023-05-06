// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const logoLightTheme =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

const logoDarkTheme =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const DarkTheme = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const LightTheme =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const Navbar = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const className = `navbar ${isDarkTheme ? 'grey' : null}`
      return (
        <nav className={className}>
          {isDarkTheme ? (
            <img src={logoDarkTheme} alt="website logo" />
          ) : (
            <img src={logoLightTheme} alt="website logo" />
          )}

          <ul>
            <Link to="/" className="link">
              <li className={isDarkTheme ? 'white' : 'black'}>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className={isDarkTheme ? 'white' : 'black'}>About</li>
            </Link>
          </ul>
          <button type="button" onClick={toggleTheme} data-testid="theme">
            <img src={isDarkTheme ? LightTheme : DarkTheme} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext>
)

export default Navbar
