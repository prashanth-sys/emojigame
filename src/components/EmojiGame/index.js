/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  onClickEmoji = id => {
    console.log(id)
    const {emojisList} = this.props
    const shuffledList = this.shuffledEmojisList(emojisList)
    console.log(shuffledList)
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {emojisList} = this.props
    return (
      <>
        <div className="emoji-container">
          <NavBar />
          <ul className="emoji-list-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojis={eachEmoji}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default EmojiGame
