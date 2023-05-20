import React from 'react';
import Select from 'react-select';

const Dropdown = () => {
    // Options for the dropdown
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Jeene ka samaan' },
      ];
  

  return (
    // Render the Select component from react-select library
    <div>
        <h1 style={{color:'skyblue'}}>What option should I choose Farha Madam?</h1>
    <Select
      options={options}// Pass the options array as the options prop
      placeholder="Select an option"// Placeholder text for the initial display
      className="dropdown-select"// Custom class name for styling
      classNamePrefix="dropdown-select"// Class prefix for the generated class names
    />
    </div>
  );
};

export default Dropdown;
