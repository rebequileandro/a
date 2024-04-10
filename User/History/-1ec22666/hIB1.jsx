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
  setEditDrinkBar
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
                cantidad: value
              }
            }
          ]);
        } else {
          let newValueBar = {
            ...editDrinkBar[indexDrinkbar].inventorySquare,
            cantidad: value
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
              value
            }
          ]);
        }
        if (indexDrink >= 0) {
          let newValue = [...editDrink];
          newValue[indexDrink].value = value;
          setEditDrink(newValue);
        }
      }
    }
  };
  useEffect(() => {
    setInput(initialValue);
  }, [initialValue]);
  return (
    <>
      {!isEdit ? (
        <h2>{input}</h2>
      ) : (
        <div className="input-item-container">
          <div className="button-wrapper">
            <button
              onClick={() => {
                setInput(
                  parseInt(input) - 1 >= 0
                    ? parseInt(input) - 1
                    : parseInt(input)
                );
                setInputDrink(parseInt(input) - 1);
              }}
            >
              -
            </button>
          </div>
          <div className="input-wrapper">
            <input
              type="number"
              value={input}
              onBlur={() => setInputDrink(input)}
              onChange={(e) => e.target.value >= 0 && setInput(e.target.value)}
            />
          </div>
          <div className="button-wrapper">
            <button
              onClick={() => {
                setInput(parseInt(input) + 1);
                setInputDrink(parseInt(input) + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InputItem;
