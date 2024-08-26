import img1 from '../assets/img1.svg';
function Card() {
    return ( 
        <div className="card" id="card1">
            <div className="card-header">
            <h1>01</h1>
            <img src={img1} alt="Logo do YouTube" />
            </div>
            <div className="card-content">
                <h2 className="card-title">YouTube</h2>
                <p className="card-description">Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
            </div>
        </div>
     );
}

export default Card;