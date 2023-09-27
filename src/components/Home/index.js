import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {name, topic} = value

      console.log('topic from home', topic)

      const returnResult = () => (
        <div className="initial-view-container">
          <div className="header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </div>
          <div className="text-container">
            <h1 className="name-heading">Hello {name}</h1>
            <p className="topic">Welcome to {topic}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
            className="meet-up-image"
          />
        </div>
      )

      const returnInitailView = () => (
        <div className="initial-view-container">
          <div className="header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </div>
          <div className="text-container">
            <h1>Welcome to Meetup</h1>
            <p>Please register for the topic</p>
            <Link to="/register">
              <button type="button" className="registerBtn">
                Register
              </button>
            </Link>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
            className="meet-up-image"
          />
        </div>
      )

      return name === '' ? returnInitailView() : returnResult()
    }}
  </RegisterContext.Consumer>
)

export default Home
