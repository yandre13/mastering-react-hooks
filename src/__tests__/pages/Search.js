import React from 'react'
import { render, screen, act } from '@testing-library/react'
import Search from 'pages/Search/Search'
import { Router, Route, MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('tests in Search <>', () => {
	const historyMock = {
		length: 3,
		createHref: jest.fn(),
		listen: jest.fn(),
		location: { pathname: '/' },
		push: jest.fn(),
		replace: jest.fn(),
		goBack: jest.fn(),
	}
	test('should render correctly with values by default', () => {
		render(
			<MemoryRouter>
				<Search />
			</MemoryRouter>
		)
		expect(screen.getByText(/Search a hero/)).toBeInTheDocument()
	})

	test('should show Batman result', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<Route path="/search">
					<Search />
				</Route>
			</MemoryRouter>
		)
		expect(screen.getByText(/Bruce Wayne/)).toBeInTheDocument()
	})

	test('should show alert error if no match finding hero', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=barmans']}>
				<Route path="/search">
					<Search />
				</Route>
			</MemoryRouter>
		)
		expect(screen.getByText(/Theres no hero with/i)).toBeInTheDocument()
	})

	test('should call push from history', async () => {
		render(
			<Router history={historyMock}>
				<Search />
			</Router>
		)
		const input = screen.getByRole('textbox')
		const button = screen.getByRole('button')
		userEvent.type(input, 'Batman')
		expect(input).toHaveValue('Batman')
		await act(async () => userEvent.click(button))
		expect(historyMock.push).toHaveBeenCalledWith('?q=Batman')
	})
})
