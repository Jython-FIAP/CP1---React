function Card({ dataapps }) {
	return (
		<>
			{dataapps.map((hab, index) => (
				<div
					className='card'
					key={index}
					style={{ backgroundColor: hab.backcolor }}
				>
					<div className='card-header'>
						<h1>{hab.id}</h1>
						<img src={hab.img} alt={'ícone ' + hab.title} />
					</div>
					<div className='card-content'>
						<h2>{hab.title}</h2>
						<p>{hab.description}</p>
					</div>
				</div>
			))}
		</>
	);
}

export default Card;
