import React, { useMemo } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getHeroById } from 'helpers/getHeroById'

const Hero = () => {
	const { id } = useParams()
	const history = useHistory()
	const hero = useMemo(() => getHeroById(id), [id])

	if (!hero) {
		history.replace('/')
		return <></>
	}
	const goBack = () =>
		history.length <= 2 ? history.push('/') : history.goBack()
	const { superhero, publisher, alter_ego, first_appearance, characters } = hero
	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					src={`/assets/heroes/${id}.jpg`}
					className="img-thumbnail"
					alt={superhero}
				/>
			</div>
			<div className="col-8">
				<h3>{superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego: </b> {alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher: </b> {publisher}
					</li>
					<li className="list-group-item">
						<b>First appearance: </b> {first_appearance}
					</li>
				</ul>
				<h5>Characters</h5>
				<p>{characters}</p>
				<button onClick={goBack} className="btn btn-outline-info">
					Go back
				</button>
			</div>
		</div>
	)
}

export default Hero
