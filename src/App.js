import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {name: '', topic: 'ARTS_AND_CULTURE'}

  onChangeName = name => {
    this.setState({
      name,
    })
  }

  onChangeTopic = topic => {
    this.setState({
      topic,
    })
  }

  render() {
    const {name, topic} = this.state
    console.log('topic from app', topic)
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
