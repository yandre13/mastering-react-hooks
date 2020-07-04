export const ACTIONS = {
	LOGIN: 'login',
	LOGOUT: 'logout',
}

export const authReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.LOGIN:
			return { ...action.payload, logged: true }
		case ACTIONS.LOGOUT:
			return { logged: false }

		default:
			return state
	}
}
