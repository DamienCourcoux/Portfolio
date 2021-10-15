// == Import
import './contact.scss';

// == Composant
const Contact = () => (
  <section className="contact">
    <h1 className="contact__title">Intéresser par mon profil ?</h1>
    <p className="contact__paragraph">Je suis ouvert à vos propositions. Prenez contact avec moi !</p>
    <button className="contact__mailto" type="button"><a href="mailto:damsmailspro@gmail.com" target="_blank" rel="noopener noreferrer">Prendre contact</a></button>
  </section>
);

// == Export
export default Contact;
