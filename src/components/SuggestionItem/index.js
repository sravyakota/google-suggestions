// Write your code here
import './index.css'

const Suggestions = props => {
  const {suggestion, onChange} = props

  const icon = () => {
    onChange(suggestion)
  }

  return (
    <li>
      <div className="suggestionItem">
        <p className="para">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="img3"
          onClick={icon}
        />
      </div>
    </li>
  )
}

export default Suggestions
