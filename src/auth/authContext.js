import React, { createContext, useContext, useReducer } from 'react'
export const AuthState = createContext()
export const AuthContext = ({ reducer, initialState = {}, init, children }) => (
	<AuthState.Provider value={useReducer(reducer, initialState, init)}>
		{children}
	</AuthState.Provider>
)
export const useAuthContext = () => useContext(AuthState)
