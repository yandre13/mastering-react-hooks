import React, { useMemo } from 'react'

import HeroCard from 'components/HeroCard'
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from 'helpers/getHeroesByName'
import SearchForm from 'components/SearchForm'

const Search = () => {
	const history = useHistory()
	const location = useLocation()
	const { q = '' } = queryString.parse(location.search)

	const handleSubmitPush = (search) => {
		history.push(`?q=${search}`)
	}
	const filteredHeroes = useMemo(() => getHeroesByName(q), [q])
	console.log('render')
	return (
		<div>
			<h1>Search</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<SearchForm handleSubmitPush={handleSubmitPush} />
				</div>
				<div className="col-7">
					{filteredHeroes.length === 0 && <h4>Search a hero</h4>}
					{filteredHeroes.length > 0 && <h4>Results</h4>}
					<hr />
					{q && filteredHeroes.length === 0 && (
						<div className="alert alert-danger">Theres no hero with {q}</div>
					)}
					{filteredHeroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Search
