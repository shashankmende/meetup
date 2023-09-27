import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: '',
  onChangeName: () => {},
  onChangeTopic: () => {},
})

export default RegisterContext
