// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojis, onClickEmoji} = props
  const {emojiUrl, emojiName, id} = emojis
  const onClickImage = () => {
    onClickEmoji(id)
  }
  return (
    <li className="list-emojis">
      <div className="emoji-list">
        <button className="button" type="button" onClick={onClickImage}>
          <img src={emojiUrl} alt={emojiName} className="emoji" />
        </button>
      </div>
    </li>
  )
}
export default EmojiCard
