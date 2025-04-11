import { useState } from 'react';
import Input from './Input';
import cities from './cities.json';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // پیام موفقیت

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!value) {
      setPlaceholder('');
      setSuccessMessage(''); 
      return;
    }

    const match = cities.find(city => city.startsWith(value));
    setPlaceholder(match || '');
    if (match && match === value) {
      setSuccessMessage("Correct");
    } else {
      setSuccessMessage('');
    }
  };


  const isExactMatch = inputValue === placeholder;

  return (
    <div>
      <Input
        handleChange={handleChange}
        hint={placeholder}
        style={isExactMatch ? { backgroundColor: 'pink' } : {}}
      />
      {successMessage && <div className="success-message">{successMessage}</div>} 
    </div>
  );
};

export default App;
