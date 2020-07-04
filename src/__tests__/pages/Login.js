import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Login from 'pages/Login/Login'
import { AuthContext } from 'auth/authContext'
import { authReducer } from 'auth/authReducer'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Router } from 'react-router-dom'

describe('tests in Login <>', () => {
	const init = () => ({ logged: false })
	const historyMock = {
		length: 3,
		createHref: jest.fn(),
		listen: jest.fn(),
		location: { pathname: '/hero/dc-batman' },
		push: jest.fn(),
		replace: jest.fn(),
		goBack: jest.fn(),
	}

	test('should dispatch and navigate', () => {
		const Component = () => (
			<AuthContext reducer={authReducer} init={init}>
				<Router history={historyMock}>
					<Login />
				</Router>
			</AuthContext>
		)
		const { rerender } = render(<Component />)
		const button = screen.getByRole('button')
		userEvent.click(button)
		expect(historyMock.replace).toHaveBeenCalledWith('/')
		localStorage.setItem('lastPath', '/dc')
		rerender(<Component />)
		userEvent.click(button)
		expect(historyMock.replace).toHaveBeenCalledWith('/dc')
	})
})
