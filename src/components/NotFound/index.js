// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const className = `not-found-container ${isDarkTheme ? 'dark' : null}`
      return (
        <div className={className}>
          <Navbar />
          <div className="not-found-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="Not found"
            />
            <h1 className={isDarkTheme ? 'white' : null}>Lost Your Way</h1>
            <p className={isDarkTheme ? 'white' : null}>
              We cannot seem to find the page
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
