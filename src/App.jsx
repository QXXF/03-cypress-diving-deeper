import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ContactsPage from './pages/Contacts';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
