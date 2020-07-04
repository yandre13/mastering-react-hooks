import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AuthContext } from 'auth/authContext'
import { MemoryRouter, Router } from 'react-router-dom'
import { authReducer } from 'auth/authReducer'
import Navbar from 'components/Navbar'

describe('tests in Navbar <>', () => {
	const init = () => ({ logged: true, name: 'Hero' })
	const historyMock = {
		createHref: jest.fn(),
		listen: jest.fn(),
		location: {},
		push: jest.fn(),
		replace: jest.fn(),
	}

	afterEach(() => jest.clearAllMocks())
	test('should render correctly', () => {
		render(
			<AuthContext reducer={authReducer} init={init}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext>
		)
		expect(screen.getByText(/Hero/)).toBeInTheDocument()
	})

	test('should call logout & use history', () => {
		render(
			<AuthContext reducer={authReducer} init={init}>
				<Router history={historyMock}>
					<Navbar />
				</Router>
			</AuthContext>
		)
		const button = screen.getByRole('button')
		userEvent.click(button)

		expect(historyMock.replace).toHaveBeenCalledWith('/login')
	})
})
