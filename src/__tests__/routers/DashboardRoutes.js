import React from 'react'
import { render, screen } from '@testing-library/react'
import DashboardRoutes from 'routers/DashboardRoutes'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from 'auth/authContext'
import { authReducer } from 'auth/authReducer'

describe('tests in DashboardRoutes <>', () => {
	const init = () => ({ logged: true, name: 'Hero' })
	test('should render correctly', () => {
		render(
			<AuthContext reducer={authReducer} init={init}>
				<MemoryRouter>
					<DashboardRoutes />
				</MemoryRouter>
			</AuthContext>
		)
		expect(screen.getByText(/Hero/)).toBeInTheDocument()
	})
})
