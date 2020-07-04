import { heroes } from 'data'

export const getHeroesByName = (name = '') =>
	!name
		? []
		: heroes.filter((hero) =>
				hero.superhero.toLowerCase().includes(name?.toLowerCase())
		  )
