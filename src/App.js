import React from 'react'
import AppRouter from 'routers/AppRouter'
import { AuthContext } from 'auth/authContext'
import { authReducer } from 'auth/authReducer'

function App() {
	const init = () =>
		JSON.parse(localStorage.getItem('user')) || { logged: false }

	return (
		<AuthContext reducer={authReducer} init={init}>
			<AppRouter />
		</AuthContext>
	)
}

export default App
