import {Component} from 'react'

import RegisterContext from '../../context/RegisterContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {ErrorMsg: ''}

  render() {
    const {ErrorMsg} = this.state
    return (
      <RegisterContext.Consumer>
        {value => {
          const {name, topic, onChangeName, onChangeTopic} = value
          console.log('name', name)
          console.log('topic', topic)
          const onChangeUserName = event => {
            onChangeName(event.target.value)
          }

          const onChangeUserTopic = event => {
            onChangeTopic(event.target.value)
          }

          const onClickRegisterBtn = event => {
            event.preventDefault()
            if (name === '') {
              this.setState({
                ErrorMsg: 'Please enter your name',
              })
            } else {
              const {history} = this.props
              this.setState({
                ErrorMsg: '',
              })
              history.replace('/')
            }
          }

          return (
            <div className="bg-container">
              <div className="header">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </div>
              <div className="middle-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <form className="form-container">
                  <h1>Let us join</h1>
                  <div className="input-container">
                    <label htmlFor="name" className="label">
                      NAME
                    </label>
                    <input
                      className="input"
                      id="name"
                      type="text"
                      placeholder="Your name"
                      onChange={onChangeUserName}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="topics" className="label">
                      TOPICS
                    </label>
                    <select
                      value={topic}
                      className="input"
                      onChange={onChangeUserTopic}
                    >
                      {topicsList.map(each => {
                        if (each.id === topicsList[0].id) {
                          return (
                            <option value={each.id} key={each.id} selected>
                              {each.displayText}
                            </option>
                          )
                        }
                        return (
                          <option value={each.id} key={each.id}>
                            {each.displayText}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="register-now-btn"
                    onClick={onClickRegisterBtn}
                  >
                    Register Now
                  </button>
                  <p className="error">{ErrorMsg}</p>
                </form>
              </div>
            </div>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
