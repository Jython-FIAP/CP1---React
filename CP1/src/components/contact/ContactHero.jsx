import xLogo from '../../assets/xLogo.png'
import igLogo from '../../assets/igLogo.png'
import discordLogo from '../../assets/discordLogo.png'
import './ContactHero.css'
function ContactHero() {
    return ( 
        <>
        <container className='hero1'>
            <h1>Dúvidas e suporte, entre em contato:</h1>
            <div className='icons'>
                <img class='imgs' src={xLogo} alt="logo do X" />
                <img class='imgs' src={igLogo} alt="logo do IG" />
                <img class='imgs' src={discordLogo} alt="logo do Discord" />
            </div>
        </container>
        </>
        
     );
}

export default ContactHero;