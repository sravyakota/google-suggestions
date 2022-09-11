// Write your code here
import {Component} from 'react'

import Suggestions from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onChange = suggestion => {
    console.log(suggestion)
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg1">
        <div className="bg2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image"
          />

          <ul className="bg3">
            <div className="searchBlock">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="img2"
              />
              <input
                type="search"
                alt="search Google"
                placeholder={searchInput}
                className="input"
                onChange={this.onSearch}
              />
            </div>
            {searchResults.map(eachSuggestion => (
              <Suggestions
                suggestion={eachSuggestion.suggestion}
                key={eachSuggestion.id}
                onChange={this.onChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
