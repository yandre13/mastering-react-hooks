import React from 'react'
import { useForm } from 'react-hook-form'

const initialValues = {
	search: '',
}

const SearchForm = ({ handleSubmitPush }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			search: '',
		},
	})

	const onSubmit = ({ search }) => {
		handleSubmitPush(search)
		reset(initialValues)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				name="search"
				type="text"
				placeholder="Search a hero"
				autoComplete="off"
				ref={register({ required: true })}
				className="form-control"
			/>
			<button className="btn btn-primary btn-block mt-3">Search</button>
		</form>
	)
}

export default SearchForm
