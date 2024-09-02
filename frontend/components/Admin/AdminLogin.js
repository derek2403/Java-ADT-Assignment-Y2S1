import React from 'react';
import { useRouter } from 'next/router';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('/background.png')", // Ensure this matches your desired background
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '0 2rem',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#3a3a8a',
    marginBottom: '1.5rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRight: '2px solid #3a3a8a',
    animation: 'typing 3.5s steps(40, end) 1s 1 normal both, blink-caret 500ms step-end infinite'
  },
  '@keyframes typing': {
    from: { width: 0 },
    to: { width: '100%' },
  },
  '@keyframes blink-caret': {
    from: { borderColor: 'transparent' },
    to: { borderColor: 'transparent' },
    '50%': { borderColor: '#3a3a8a' },
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    width: '100%',
  },
  loginButton: {
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#3a3a8a',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  buttonHover: {
    backgroundColor: '#3a3a70',
    transform: 'scale(1.05)',
  },
};

export default function AdminLogin() {
  const router = useRouter();

  const handleLogin = () => {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');

    if (username === 'XXX' && password === 'XXX') {
      alert('Login successful!');
      router.push('/admin/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginContainer}>
        <h1 style={styles.title}>Please log in as an administrator.</h1>
        <button
          style={styles.loginButton}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.loginButton.backgroundColor}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
