import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';

export default function SignIn() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();
  const { loginDonee } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Attempting sign-in with data:', formData);

    try {
      const response = await axios.post('http://localhost:3001/api/donees/signin', formData);
      console.log('Sign-in successful. Response data:', response.data);
      loginDonee(response.data);
      setIsRedirecting(true);
    } catch (error) {
      console.error('Error signing in:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
      }
      alert('Error signing in: ' + (error.response?.data || error.message));
    }
  };

  useEffect(() => {
    if (isRedirecting) {
      console.log('Redirecting to /donee/dashboard');
      router.push('/donee/registered').then(() => {
        console.log('Redirection successful');
      }).catch(err => {
        console.error('Redirection error:', err);
      });
      setIsRedirecting(false); // Prevent further redirection attempts
    }
  }, [isRedirecting, router]);

  return (
    <div>
      <h2>Sign In Donee</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
