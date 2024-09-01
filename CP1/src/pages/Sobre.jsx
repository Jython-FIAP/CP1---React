import './Sobre.css';
import videoSaved from '../assets/video-saved.png';
import videoMerged from '../assets/video-merge.png';
import PlanoCard from '../components/sobre/PlanoCard';

function Sobre() {
	return (
		<article className='sobre-content-container'>
			<div className='sobre-intro-container'>
				<div className='sobre-title-container'>
					<h1>Bem-vindo à revolução dos vídeos!</h1>
					<p>
						Somos uma startup com o objetivo de facilitar a produção
						de conteúdo em larga escala com qualidade profissional,
						capaz de atingir uma audiência de milhões de seguidores.
					</p>
					<button>Baixe o app</button>
				</div>
				<div className='sobre-image-container'>
					<img src={videoMerged} />
					<img src={videoSaved} />
				</div>
			</div>
			<div className='sobre-planos-container'>
				<h2>Planos</h2>
				<div className='card-container'>
					<PlanoCard
						highlighted={true}
						title='Individual'
						featureTable={[
							{
								userAmt: '1 Usuario',
								label: '10 Vídeos',
								price: 15,
							},
						]}
					/>
					<PlanoCard
						title='Profissional - Times'
						featureTable={[
							{
								userAmt: '1-10 Usuários',
								label: 'vídeos ilimitados',
								price: 40,
							},
							{
								userAmt: '+10 Usuários',
								label: 'Vídeos ilimitados',
								price: 20,
							},
						]}
					/>
					<PlanoCard
						title='Corporativo'
						btnTitle='Entre Em Contato'
					/>
				</div>
			</div>
		</article>
	);
}

export default Sobre;
