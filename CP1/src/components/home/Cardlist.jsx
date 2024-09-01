import Card from '../Card';

function Cards({ apps }) {
	return (
		<div className='cards'>
			<Card dataapps={apps} />
		</div>
	);
}

export default Cards;
