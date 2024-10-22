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
      <div className='bg-pink-200 p-4'>
        <h1 className='p-2 text-xl font-medium'>About</h1>
        <h2 className='p-2 text-xl font-medium'>This is our about</h2>
        <UserClass />
      </div>
    )
  }
}


export default About