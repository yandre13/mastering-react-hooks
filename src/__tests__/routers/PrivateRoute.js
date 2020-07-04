import React from 'react'
import { render, screen } from '@testing-library/react'
import PrivateRoute from 'routers/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'

describe('tests in PrivateRoute <>', () => {
	Storage.prototype.setItem = jest.fn()

	afterEach(() => jest.clearAllMocks())

	test('should show component if user is authenticated and safe lastPath in localstorage', () => {
		render(
			<MemoryRouter initialEntries={['/dc']}>
				<PrivateRoute logged={true} path="/dc" component={() => <span>DC</span>} />
			</MemoryRouter>
		)
		expect(screen.getByText(/DC/)).toBeInTheDocument()
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/dc')
	})

	test('should not render component if user isnt authenticated', () => {
		render(
			<MemoryRouter initialEntries={['/dc']}>
				<PrivateRoute
					logged={false}
					path="/dc"
					component={() => <span>Im block :C</span>}
				/>
			</MemoryRouter>
		)
		expect(screen.queryByText(/DC/)).not.toBeInTheDocument()
		expect(localStorage.setItem).toHaveBeenCalled()
	})
})
