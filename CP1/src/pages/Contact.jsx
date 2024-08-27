import './Contact.css'
import ContactHero from '../components/ContactHero'
import ContactForms from './components/ContactForms'

function Contact(){
 
  return( 
    <section>
      <div className='ContactHero'>
        <ContactHero />
      </div>
      <div className='column-border'><hr/></div>
      <div className='ContactForms'>
        <ContactForms />
      </div>
    </section>
    );
}



export default Contact;