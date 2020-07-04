import React from 'react'
import { useHistory } from 'react-router-dom'
import { ACTIONS } from 'auth/authReducer'
import { useAuthContext } from 'auth/authContext'
const Login = () => {
	const [user, dispatch] = useAuthContext()
	const history = useHistory()
	const lastPath = localStorage.getItem('lastPath') || '/'
	const handleLogin = () => {
		dispatch({ type: ACTIONS.LOGIN, payload: { name: 'Hero' } })
		history.replace(lastPath)
		console.log(lastPath)
	}

	return (
		<div className="container mt-5">
			{console.log(user)}
			<h1>Login</h1>
			<hr />
			<button className="btn btn-primary" onClick={handleLogin}>
				login
			</button>
		</div>
	)
}

export default Login
