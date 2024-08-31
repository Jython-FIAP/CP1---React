import hero from '../../assets/hero.svg';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="hero">
            <div className="text">
                <h1>Crie seus vídeos online</h1>
                <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                <Link to="/start">Começar agora!</Link>
            </div>
            <div className="content">
                <img src={hero} alt="Imagem do Hero" />
            </div>
        </div>
    );
}

export default Hero;