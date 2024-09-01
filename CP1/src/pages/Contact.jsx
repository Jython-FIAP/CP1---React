import './Contact.css';
import ContactHero from '../components/contact/ContactHero';
import ContactForms from '../components/contact/ContactForms';

function Contact() {
	return (
		<section>
			<div className='ContactHero'>
				<ContactHero />
			</div>
			<div className='column-border'>
				<hr />
			</div>
			<div className='ContactForms'>
				<ContactForms />
			</div>
		</section>
	);
}

export default Contact;
