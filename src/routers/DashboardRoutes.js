import React from 'react'
import Navbar from 'components/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import Marvel from 'pages/Marvel/Marvel'
import Hero from 'pages/Hero/Hero'
import Dc from 'pages/Dc/Dc'
import Search from 'pages/Search/Search'
const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-4">
				<Switch>
					<Route exact path="/marvel" component={Marvel} />
					<Route exact path="/hero/:id" component={Hero} />
					<Route exact path="/dc" component={Dc} />
					<Route exact path="/" component={Search} />
					<Redirect to="/" />
				</Switch>
			</div>
		</>
	)
}

export default DashboardRoutes
