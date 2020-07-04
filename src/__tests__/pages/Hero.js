import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from 'pages/Hero/Hero'
import { Router, MemoryRouter, Route } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('tests in Hero <>', () => {
	const historyMock = {
		length: 1,
		createHref: jest.fn(),
		listen: jest.fn(),
		location: { pathname: '/hero/dc-batman' },
		push: jest.fn(),
		replace: jest.fn(),
		goBack: jest.fn(),
	}
	afterEach(() => jest.clearAllMocks())

	test('should not render Hero page', () => {
		const history = {
			length: 3,
			createHref: jest.fn(),
			listen: jest.fn(),
			location: { pathname: '/hero/dc-batmans' },
			push: jest.fn(),
			replace: jest.fn(),
			goBack: jest.fn(),
		}
		render(
			<Router history={history}>
				<Route exact path="/hero/:id">
					<Hero />
				</Route>
			</Router>
		)
		expect(screen.queryByText(/Batman/)).not.toBeInTheDocument()
		expect(history.replace).toHaveBeenCalledWith('/')
	})

	test('should render a hero when matching the right id', () => {
		render(
			<Router history={historyMock}>
				<Route exact path="/hero/:id">
					<Hero />
				</Route>
			</Router>
		)
		expect(screen.getByText(/Batman/)).toBeInTheDocument()
	})

	test('should return to previous page', () => {
		render(
			<Router history={historyMock}>
				<Route path="/hero/:id">
					<Hero />
				</Route>
			</Router>
		)
		const button = screen.getByRole('button')
		userEvent.click(button)
		expect(historyMock.push).toHaveBeenCalledWith('/')
		expect(historyMock.goBack).not.toHaveBeenCalledTimes(1)
	})
})
