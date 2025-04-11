import { useState } from 'react';
import Input from './Input';
import cities from './cities.json';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!value) {
      setPlaceholder('');
      return;
    }

    const match = cities.find(city => city.startsWith(value));
    setPlaceholder(match || '');
  };

  return (
    <div>
      <Input handleChange={handleChange} hint={placeholder} />
    </div>
  );
};

export default App;
