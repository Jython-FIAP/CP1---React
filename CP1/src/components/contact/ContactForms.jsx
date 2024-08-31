import './ContactForms.css'
import { Link } from 'react-router-dom';

function ContactForms() {
    return ( 
        <>
        <container className="forms">
            <inputbox className="inputContent">
                <label for="name">Nome: </label>
                <input type="text" id="name"/>
            </inputbox>
            <inputbox className="inputContent">
                <label for="e-mail">E-mail: </label>
                <input type="email" id="e-mail"/>
            </inputbox>
            <inputbox className="inputContent inputMessage">
                <label for="message">Mensagem: </label>
                <input type="text" id="message"/>
            </inputbox> 

             <Link to="/send"><button name='btnAssign'>Enviar</button></Link>
             



        </container>
        </>
     );
}

export default ContactForms ;