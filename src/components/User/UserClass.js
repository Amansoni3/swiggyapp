import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo:{
                
            }
        }
        // console.log(this.props.name + " Child Constructor")
    }

    async componentDidMount() {
        // console.log(this.props.name + " Child component did mount called")
        const data = await fetch('https://api.github.com/users/Amansoni3')
        const json = await data.json()
        
        this.setState({
            userInfo:json
        })
        console.log(this.state.userInfo,'user')
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render() {
        // console.log(this.props.name + " Child Component render called")
        return (
            <div className='user-card'>
                <p>Made using class components</p>
                <img src={this.state.userInfo.avatar_url} alt="Profile Picture" />
                <h1>Name: {this.state.userInfo.name}</h1>
                <h2>Location: {this.state.userInfo.location || "Gwalior"}</h2>
                <h3>Contact: {this.state.userInfo.email || "soni.aman9039@gmail.com"}</h3>
                <h3>Bio: {this.state.userInfo.bio}</h3>
            </div>
        )
    }
}

export default UserClass