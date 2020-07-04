import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from 'pages/Login/Login'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { useAuthContext } from 'auth/authContext'
const AppRouter = () => {
	const [user] = useAuthContext()
	console.log(user)
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user))
	}, [user])

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute exact logged={user.logged} path="/login" component={Login} />
					<PrivateRoute path="/" logged={user.logged} component={DashboardRoutes} />
				</Switch>
			</div>
		</Router>
	)
}

export default AppRouter
