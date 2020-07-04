const { authReducer } = require('auth/authReducer')

describe('tests in authReducir', () => {
	const init = {
		logged: false,
	}
	test('should return state by default', () => {
		const state = authReducer(init, {})
		expect(state).toEqual(init)
	})

	test('should autenticate and update with name', () => {
		const action = { type: 'login', payload: { name: 'Hero' } }
		const state = authReducer(init, action)
		expect(state).toEqual({ ...init, name: 'Hero', logged: true })
	})

	test('should logout and change logged to false', () => {
		const state = authReducer(init, { type: 'logout' })
		expect(state).toEqual(init)
	})
})
