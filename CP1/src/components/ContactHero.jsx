import xLogo from '../assets/xLogo.png'
import igLogo from '../assets/igLogo.png'
import discordLogo from '../assets/discordLogo.png'
import './ContactHero.css'
function ContactHero() {
    return ( 
        <>
        <container className='hero'>
            <h1>Dúvidas e suporte, entre em contato:</h1>
            <div className='icons'>
                <img src={xLogo} alt="logo do X" />
                <img src={igLogo} alt="logo do IG" />
                <img src={discordLogo} alt="logo do Discord" />
            </div>
        </container>
        </>
        
     );
}

export default ContactHero;