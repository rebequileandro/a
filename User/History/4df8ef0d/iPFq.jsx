import { useSelector } from 'react-redux';
import Select from '../../../../../components/global/Select/Select/Select';
import './table-selector.scss';
import { Fragment, useEffect, useState } from 'react';
import Button from '../../../../../components/global/Button/Button';

const TableSelector = () => {
  const [tableOptions, setTableOptions] = useState([]);
  const [floorSelected, setFloorSelected] = useState(null);
  const [tableSelected, setTableSelected] = useState(null);

  const floorsToChoose = useSelector(
    (state) => state.partyUser.checkout.danceFloorBar.floors
  );

  const handleChangeSelected = (e) => {
    setTableSelected(e.target.value);
  };

  const handleConfirm = () => {
    console.log(floorSelected);
    console.log(tableSelected);
  };

  //table generation
  useEffect(() => {
    let table = [];
    for (let index = 1; index < 51; index++) {
      table.push(`MESA ${index}`);
    }
    setTableOptions(table);
  }, []);

  return (
    <section className="table-selector">
      <p className="table-selector__description">
        Selecciona la zona y el nro de la mesa, el numero esta en el Qr que
        escaneaste.
      </p>
      <Select
        placeholder={'Selecciona una planta'}
        onChange={setFloorSelected}
        options={floorsToChoose}
        icon
      />
      {floorSelected && (
        <>
          <h3 className="table-selector__sub-title">Elige tu mesa</h3>
          <div className="table-selector__option-container">
            {tableOptions.map((option, i) => (
              <Fragment key={option}>
                <label className="table-selector__option-container__option">
                  {option}
                  <input
                    type="radio"
                    name="table-option"
                    value={option}
                    checked={tableSelected === option}
                    className="input-radio"
                    onChange={handleChangeSelected}
                  />
                </label>
                {i < tableOptions.length - 1 && (
                  <div className="grey-gradient-line" />
                )}
              </Fragment>
            ))}
          </div>
          <Button children={'Aceptar'} onClick={() => handleConfirm()} />
        </>
      )}
    </section>
  );
};

export default TableSelector;
