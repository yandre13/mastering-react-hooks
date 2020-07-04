import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'

const PrivateRoute = ({ path, logged, component: Component }) => {
	const location = useLocation()
	localStorage.setItem('lastPath', location.pathname)
	return (
		<Route
			path={path}
			component={() => (!logged ? <Redirect to="/login" /> : <Component />)}
		/>
	)
}

export default PrivateRoute
