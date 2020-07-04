import { heroes } from 'data'

export const getHeroById = (id) => heroes.find((hero) => hero.id === id)
