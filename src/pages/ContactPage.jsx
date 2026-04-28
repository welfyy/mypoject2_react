import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Ім'я обов'язкове";
    if (!formData.email.includes('@')) newErrors.email = "Email має містити '@'";
    if (formData.message.length < 10) newErrors.message = "Повідомлення має бути не коротшим за 10 символів";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Дані форми:", formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Очищення форми
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="main-content">
      <h1>Зворотний зв'язок</h1>
      {submitted && <p style={{ color: 'green' }}>Дякуємо! Ваше повідомлення надіслано.</p>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
        <div>
          <label>Ім'я:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
          {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
          {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
        </div>

        <div>
          <label>Повідомлення:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '8px', minHeight: '100px' }} />
          {errors.message && <span style={{ color: 'red', fontSize: '12px' }}>{errors.message}</span>}
        </div>

        <button type="submit" className="buy-button">Надіслати</button>
      </form>
    </main>
  );
}