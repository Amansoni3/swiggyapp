import React, { useState } from 'react'

const User = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div className='user-card'>
            <h1>Count: {count}</h1>
            <h1>Name: {props.name}</h1>
            <h2>Location: Gwalior</h2>
            <h3>Contact: soni.aman9039@gmail.com</h3>
        </div>
    )
}

export default User