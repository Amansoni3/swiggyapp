import React from 'react'
import User from '../User/User'
import UserClass from '../User/UserClass'
import UserContext from '../../utlis/UserContext'

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
        <h3 className='p-2 text-xl font-medium'>Logged in User
          <UserContext.Consumer>
            {
              (data) => <h3>{data.loggedInUser}</h3>
            }
          </UserContext.Consumer>
        </h3>
        <UserClass />
      </div>
    )
  }
}


export default About