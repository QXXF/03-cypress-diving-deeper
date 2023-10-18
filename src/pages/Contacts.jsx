import ContactForm from '../components/ContactForm';

function ContactsPage() {
  return (
    <>
      <header className="center">
        <h1>Contatti</h1>
        <p>
          Abbiamo fatto tantissima strada nel mondo dell'Automation Testing.
          Ho creato questa terza demo per scoprire alcune best practices di Cypress.
        </p>
        <p>
          Clicca su questo link per accedere a <a href="https://github.com/QXXF/">tutte le risorse del corso</a>.
        </p>
      </header>
      <ContactForm />
    </>
  );
}

export default ContactsPage;
