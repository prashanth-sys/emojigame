// Write your code here.
import './index.css'

const NavBar = props => {
  const {score} = props
  return (
    <nav className="nav-container">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="score">Score:{score}</p>
        <p className="score-top">Top Score: 0</p>
      </div>
    </nav>
  )
}
export default NavBar
