import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Kirim data ke server atau kirim email di sini
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div>
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          style={styles.input}
        />
      </div>
      <div>
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={styles.input}
        />
      </div>
      <div>
        <label>Message</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          style={styles.textarea}
        ></textarea>
      </div>
      <button type="submit" style={styles.button}>Send Message</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '5px 0 15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '5px 0 15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '100px',
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ContactForm;
