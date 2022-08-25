import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from './App.styled';
import { ContactPage } from 'components/ContactPage/ContactPage';
import { Navigation } from 'components/Navigation/Navigation';
import { RegisterPage } from 'components/RegisterPage/RegisterPage';
import { LoginPage } from 'components/LoginPage/LoginPage';
import { HomePage } from 'components/HomePage/HomePage';

export const App = () => {
  return (
    <Container>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactPage />} />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Toaster />
    </Container>
  );
};
