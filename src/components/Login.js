import React from 'react'

const Login = ({authenticate}) => {
    return(
        <div className="login">
            <h2>Sign in for create new receipes</h2>
            <button onClick={authenticate} className="facebook-button">
                Connection with facebook
            </button>
        </div>
    )
}

export default Login