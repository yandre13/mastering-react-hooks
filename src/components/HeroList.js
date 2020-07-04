import React, { useMemo } from 'react'
import { getHeroesByPublisher } from 'helpers/getHeroesByPublisher'
import HeroCard from './HeroCard'

const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

	return (
		<div className="card-columns">
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero}>
					{hero.superhero}
				</HeroCard>
			))}
		</div>
	)
}

export default HeroList
