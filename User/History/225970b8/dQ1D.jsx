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
    const result = barEditInventory.length
      ? general - (barEditInventory[0].inventorySquare.cantidad - barInventory)
      : general;
    return result >= 0 ? result : 0;
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
        {content.map((e, i) => {
          if (e.active === 'true') {
            return (
              <Fragment key={e._id}>
                <div className="pink-gradient-line-2">&nbsp;</div>
                <div className="content-item">
                  <div className="content-item__title-containner">
                    <h2 className="content-item__title">{e.name}</h2>
                    {bar !== 'general' && (
                      <p className="content-item__stock">
                        General:{' '}
                        {/* {calcInventoryGeneral(
                          e._id,
                          
                          e.inventorySquare
                        )} */}
                        {e.inventoryGeneral}
                        uds.
                      </p>
                    )}
                  </div>

                  <InputItem
                    key={`${e._id}${
                      bar === 'general' ? e.inventoryGeneral : e.inventorySquare
                    }`}
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
                    inventoryGeneral={e.inventoryGeneral}
                  />
                </div>
              </Fragment>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Item;
