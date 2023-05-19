import React from 'react';
import Button from './button';

const App = () => {
  const handleButtonClick1 = () => {
    alert('I am button 1 clicked');
  };

  const handleButtonClick2 = () => {
    alert('I am button 2 clicked');
  };

  const buttonStyle1 = {
    color: 'white',
    background: 'red',
  };

  const buttonStyle2 = {
    color: 'white',
    background: 'blue',
  };

  return (
    <div>
      <Button
        buttonText="Button 1"
        buttonStyle={buttonStyle1}
        onClick={handleButtonClick1}
      />
      <Button
        buttonText="Button 2"
        buttonStyle={buttonStyle2}
        onClick={handleButtonClick2}
      />
    </div>
  );
};

export default App;
