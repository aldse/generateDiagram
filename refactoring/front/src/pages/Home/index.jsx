import { useState } from 'react';
import Input from '../../components/Input';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted name:", name);
    console.log("Submitted email:", email);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name:"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <Input
        label="Email:"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Home;
