import Hero from '../components/home/Hero';
import Cards from '../components/home/Cardlist';

import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.svg';

function Home() {
	const apps = [
		{
			id: '01',
			title: 'YouTube',
			description:
				'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.',
			img: img1,
			backcolor: '#F1C2B0',
		},
		{
			id: '02',
			title: 'TikTok',
			description:
				'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.',
			img: img2,
			backcolor: '#F9EB98',
		},
		{
			id: '03',
			title: 'Facebook',
			description:
				'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.',
			img: img3,
			backcolor: '#C0D9DD',
		},
		{
			id: '04',
			title: 'Instagram',
			description:
				'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.',
			img: img4,
			backcolor: '#6975E8',
		},
	];

	return (
		<div>
			<Hero />
			<Cards apps={apps} />
		</div>
	);
}

export default Home;
