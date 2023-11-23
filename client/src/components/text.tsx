import React, { useState, ChangeEvent } from 'react';

interface CheckboxGroupState {
  [key: string]: boolean;
}

const CheckboxGroup: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<CheckboxGroupState>({});
  const countries = ['USA', 'Canada', 'UK', 'Australia'];

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (name === 'SelectAll') {
      // If 'Select All' checkbox is clicked, update all checkboxes
      const updatedCheckedItems: CheckboxGroupState = {};
      countries.forEach(country => {
        updatedCheckedItems[country] = checked;
      });
      setCheckedItems(updatedCheckedItems);
    } else {
      // If a country checkbox is clicked, update the specific checkbox
      setCheckedItems(prevCheckedItems => ({
        ...prevCheckedItems,
        [name]: checked,
      }));

      // If all country checkboxes are checked, uncheck 'Select All'
      if (Object.values(checkedItems).every(value => value)) {
        setCheckedItems(prevCheckedItems => ({
          ...prevCheckedItems,
          SelectAll: false,
        }));
      }
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="SelectAll"
          checked={Object.values(checkedItems).every(value => value)}
          onChange={handleCheckboxChange}
        />
        Select All
      </label>
      {countries.map(country => (
        <div key={country}>
          <label>
            <input
              type="checkbox"
              name={country}
              checked={checkedItems[country] || false}
              onChange={handleCheckboxChange}
            />
            {country}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
