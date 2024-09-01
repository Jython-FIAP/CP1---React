import React from 'react';
import './PlanoCard.css';
import mobileFeed from '../../assets/mobile-feed.svg';

/**
 * Renders a PlanoCard component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} [props.highlighted=false] - Indicates whether the card should be highlighted.
 * @param {string} props.title - The title of the card.
 * @param {string} props.btnTitle - The title of the button.
 * @param {Array<{price: number, userAmt: string, label: string}>} props.featureTable - The feature table data.
 * @returns {JSX.Element} The rendered PlanoCard component.
 */
function PlanoCard({
	highlighted = false,
	title,
	featureTable = [],
	btnTitle = 'Cadastrar',
}) {
	return (
		<div className={'plano-card' + (highlighted ? ' highlighted' : '')}>
			<div className='plano-card-header'>
				<p>{title}</p>
			</div>
			<div className='plano-card-content'>
				{featureTable.length ? (
					featureTable.map((feature, index) => (
						<div key={index} className='feature-item'>
							<div className='feature-userAmt'>
								{feature.userAmt}
							</div>
							<div className='feature-details'>
								<span className='feature-label'>
									{feature.label}
								</span>
								<span className='feature-price'>
									R${feature.price}
								</span>
							</div>
						</div>
					))
				) : (
					<img src={mobileFeed} />
				)}
			</div>
			<div className='plano-card-actions'>
				<button>{btnTitle}</button>
			</div>
		</div>
	);
}

export default PlanoCard;
