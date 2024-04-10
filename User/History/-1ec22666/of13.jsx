import React, { useEffect, useState } from 'react';
import './InputItem.scss';
const InputItem = ({
  initialValue,
  isEdit,
  setEditDrink,
  editDrink,
  id,
  bar,
  editDrinkBar,
  setEditDrinkBar,
  inventoryGeneral
}) => {
  const [input, setInput] = useState('');
  const setInputDrink = (value) => {
    if (value >= 0) {
      if (bar !== 'general') {
        let indexDrinkbar = editDrinkBar.findIndex((e) => e._id === id);
        if (indexDrinkbar < 0) {
          setEditDrinkBar([
            ...editDrinkBar,
            {
              _id: id,
              inventorySquare: {
                namebarra: bar,
                cantidad: parseFloat(value)
              }
            }
          ]);
        } else {
          let newValueBar = {
            ...editDrinkBar[indexDrinkbar].inventorySquare,
            cantidad: parseFloat(value)
          };
          let newValueEditDrinkBar = [...editDrinkBar];
          newValueEditDrinkBar[indexDrinkbar].inventorySquare = newValueBar;
          setEditDrinkBar(newValueEditDrinkBar);
        }
      } else {
        let indexDrink = editDrink.findIndex((e) => e._id === id);
        if (indexDrink < 0) {
          setEditDrink([
            ...editDrink,
            {
              _id: id,
              value: parseFloat(value)
            }
          ]);
        }
        if (indexDrink >= 0) {
          let newValue = [...editDrink];
          newValue[indexDrink].value = parseFloat(value);
          setEditDrink(newValue);
        }
      }
    }
  };
  useEffect(() => {
    setInput(initialValue);
  }, [initialValue]);
  const more = () => {
    console.log(bar);
    setInput(parseFloat(input) + 1);
    setInputDrink(parseFloat(input) + 1);
  };
  const less = () => {
    setInput(
      parseFloat(input) - 1 >= 0 ? parseFloat(input) - 1 : parseFloat(input)
    );
    setInputDrink(parseFloat(input) - 1);
  };
  const handleInputChange = (e) => {
    if (e.target.value >= 0) {
      setInput(e.target.value);
    }
  };
  console.log(input);
  return (
    <>
      {!isEdit ? (
        <p className="input-item-amount">
          {`${input}`?.includes('.') ? parseFloat(input)?.toFixed(2) : input}
        </p>
      ) : (
        <div className="input-item-container">
          <div className="button-wrapper">
            <button onClick={less}>-</button>
          </div>
          <div className="input-wrapper">
            <input
              type="number"
              value={input}
              onBlur={() => setInputDrink(input)}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-wrapper">
            <button onClick={more}>+</button>
          </div>
        </div>
      )}
    </>
  );
};

export default InputItem;
