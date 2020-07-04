import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ exact, path, logged, component: Component }) => {
	return (
		<Route
			exact={exact}
			path={path}
			component={() => (!logged ? <Component /> : <Redirect to="/" />)}
		/>
	)
}

export default PublicRoute
