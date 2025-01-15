import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ganti useHistory dengan useNavigate

const StartPage = () => {
  const navigate = useNavigate(); // Menggunakan useNavigate

  const handleStartClick = () => {
    // Arahkan pengguna ke halaman proyek setelah tombol "Start" diklik
    navigate('/projects');
  };

  return (
    <div style={styles.startPage}>
      <h1>Welcome to My Portfolio</h1>
      <p>Click the button below to start exploring my projects!</p>
      <button onClick={handleStartClick} style={styles.startButton}>
        START
      </button>
    </div>
  );
};

const styles = {
  startPage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#F59C40',
  },
  startButton: {
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#097351',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    marginTop: '20px',
  },
};

export default StartPage;
