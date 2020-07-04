import { heroes } from 'data'

export const getHeroesByPublisher = (publisher) => {
	const VALID_PUBLISHERS = ['DC Comics', 'Marvel Comics']

	if (!VALID_PUBLISHERS.includes(publisher)) {
		throw new Error(`Publisher ${publisher} is wrong`)
	}
	return heroes.filter((hero) => hero.publisher === publisher)
}
