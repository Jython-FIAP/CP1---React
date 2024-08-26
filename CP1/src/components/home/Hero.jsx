import hero from '../../assets/hero.svg';

function Hero() {
    return (
        <div className="hero">
            <div className="text">
                <h1>Crie seus vídeos online</h1>
                <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                <a href="">Começar agora!</a>
            </div>
            <div className="content">
                <img src={hero} alt="Imagem do Hero" />
            </div>
        </div>
    );
}

export default Hero;