import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { ACTIONS } from 'auth/authReducer'
import { useAuthContext } from 'auth/authContext'
const Navbar = () => {
	const [user, dispatch] = useAuthContext()
	const history = useHistory()
	const handleLogout = () => {
		dispatch({ type: ACTIONS.LOGOUT })
		history.replace('/login')
		localStorage.removeItem('user')
	}
	console.log('user', user)
	const handleLogin = () => history.push('/login')

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Heroes App
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/dc"
					>
						DC
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<ul className="navbar-nav ml-auto">
					{user.name && (
						<li>
							<p className="mb-0 nav-item nav-link text-info">{user.name}</p>
						</li>
					)}
					<li>
						{user.name ? (
							<button className="nav-item nav-link btn" onClick={handleLogout}>
								Logout
							</button>
						) : (
							<button className="nav-item nav-link btn" onClick={handleLogin}>
								Login
							</button>
						)}
					</li>
				</ul>
			</div>
		</nav>
	)
}
export default React.memo(Navbar)
