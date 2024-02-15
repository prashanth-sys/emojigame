// Write your code here.
import './index.css'

const NavBar = () => (
  <div className="nav-container">
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo"
      />
      <h1 className="logo-name">Emoji Game</h1>
    </div>
    <div className="score-container">
      <h1 className="score">Score : 0</h1>
      <h1 className="score-top">Top Score : 0</h1>
    </div>
  </div>
)
export default NavBar
