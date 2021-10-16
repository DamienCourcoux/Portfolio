// == Import
import './contact.scss';

// == Composant
const Contact = () => (
  <section className="contact">
    <h1 className="contact__title">Intéresser par mon profil ?</h1>
    <p className="contact__paragraph">Je suis ouvert à vos propositions. Prenez contact avec moi !</p>
    <a className="contact__mailto" href="mailto:damsmailspro@gmail.com" title="Prendre contact" target="_blank" rel="noopener noreferrer">Prendre contact</a>
  </section>
);

// == Export
export default Contact;
