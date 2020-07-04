import React from 'react'
import { render, screen } from '@testing-library/react'
import AppRouter from 'routers/AppRouter'
import { AuthContext } from 'auth/authContext'
import { authReducer } from 'auth/authReducer'

describe('tests in AppRouter <>', () => {
	const init = () => ({ logged: false })
	const initRight = () => ({ logged: true, name: 'Hero' })

	test('should render login if user istn authenticated', () => {
		render(
			<AuthContext reducer={authReducer} init={init}>
				<AppRouter />
			</AuthContext>
		)
		expect(screen.getByText(/Login/)).toBeInTheDocument()
	})

	test('should render component DC if user is authenticated', () => {
		render(
			<AuthContext reducer={authReducer} init={initRight}>
				<AppRouter />
			</AuthContext>
		)
		expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
	})
})
