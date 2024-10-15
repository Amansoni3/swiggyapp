import React from 'react'
import User from '../User/User'
import UserClass from '../User/UserClass'

class About extends React.Component {
  constructor(props) {
    super(props)
    // console.log("Parent constructor called")
  }

  componentDidMount(){
    // console.log("Parent component did mount is called...")
  }
  render() {
    // console.log("Parent render component called")
    return (
      <div>
        <h1>About</h1>
        <h2>This is our about</h2>
        <UserClass />
      </div>
    )
  }
}


export default About