import React from 'react'
import Form from './Form'
import  './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      isMilk: false,
      isNuts: false,
      isBread: false
    }
    this.handle = this.handle.bind(this)
  }
  handle(event) {
    const { name, value, type, checked } = event.target
    type === 'checkbox' ? this.setState({ [name]: checked }) :
      this.setState({ [name]: value })
  }


  render() {
    return (
     <div >
       <h1>sample form</h1>
       <Form handle={this.handle}{...this.state}/>
     </div>
    )
  }
}
export default App