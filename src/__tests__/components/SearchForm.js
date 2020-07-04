import React from 'react'
import { render, screen, act } from '@testing-library/react'
import SearchForm from 'components/SearchForm'
import userEvent from '@testing-library/user-event'

describe('tests in SearchForm <>', () => {
	const handleSubmitMock = jest.fn()
	test('should render correctly and type in input', async () => {
		render(<SearchForm handleSubmitPush={handleSubmitMock} />)
		const input = screen.getByRole('textbox')
		const button = screen.getByRole('button')
		userEvent.type(input, 'Batman')
		expect(input).toHaveValue('Batman')
		await act(async () => userEvent.click(button))
		expect(handleSubmitMock).toHaveBeenCalledTimes(1)
	})
})
