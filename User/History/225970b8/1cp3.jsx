import { useEffect, useState, Fragment } from 'react';
import './Item.scss';
import arrow from '../../../../assets/icons/down-arrow.svg';
import InputItem from './InputItem';
const Item = ({
  nameCategory,
  content,
  isEdit,
  editDrink,
  setEditDrink,
  bar,
  editDrinkBar,
  setEditDrinkBar
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const filterBar = (inventory) => {
    let data = inventory?.filter(
      (e) => e.namebarra?.toLowerCase() === bar?.toLowerCase()
    );
    return data && data[0]?.cantidad;
  };
  const calcInventoryGeneral = (id, general, inventoryBar) => {
    const barEditInventory = editDrinkBar?.filter((e) => e._id === id);
    const barInventory = filterBar(inventoryBar);
    return barEditInventory.length
      ? general - (barEditInventory[0].inventorySquare.cantidad - barInventory)
      : general;
  };
  return (
    <div className="item-inventory-container">
      <div className="row-container" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="item-inventory-container__drink-title">
          {nameCategory}
        </h2>
        <img
          className={`image-row-item ${isOpen && 'image-show'}`}
          src={arrow}
          alt="ver mas"
        />
      </div>
      <div className={`content ${isOpen && 'show-content'}`}>
        {content.map((e, i) => (
          <Fragment key={i}>
            <hr />
            <div className="content-item">
              <div>
                <h2>
                  {e.name}{' '}
                  <span className="content-item__mlbottle">
                    {e.mlByBottle} ml.
                  </span>
                </h2>
                {bar !== 'general' && (
                  <p>
                    Inventario general:{' '}
                    {calcInventoryGeneral(
                      e._id,
                      e.inventoryGeneral,
                      e.inventorySquare
                    )}{' '}
                    uds.
                  </p>
                )}
              </div>
              <InputItem
                isEdit={isEdit}
                initialValue={
                  bar === 'general'
                    ? e.inventoryGeneral
                    : filterBar(e.inventorySquare)
                }
                setEditDrink={setEditDrink}
                editDrink={editDrink}
                id={e._id}
                bar={bar}
                inventoryBar={e.inventorySquare}
                editDrinkBar={editDrinkBar}
                setEditDrinkBar={setEditDrinkBar}
              />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Item;
