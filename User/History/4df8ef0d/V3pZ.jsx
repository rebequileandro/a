import { useSelector } from 'react-redux';
import Select from '../../../../../components/global/Select/Select/Select';
import './table-selector.scss';
import { useEffect, useState } from 'react';

const TableSelector = () => {
  const [tableOptions, setTableOptions] = useState([]);
  const [tableSelected, setTableSelected] = useState('MESA 6');

  const floorsToChoose = useSelector(
    (state) => state.partyUser.checkout.danceFloorBar.floors
  );

  const onChangeSelect = () => {};
  const handleChangeSelected = (e) => {
    setTableSelected(e.target.value);
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
        onChange={onChangeSelect}
        options={floorsToChoose}
        icon
      />
      <h3 className="table-selector__sub-title">Elige tu mesa</h3>
      <div className="table-selector__option-container">
        {tableOptions.map((option) => (
          <label
            className="table-selector__option-container__option"
            key={option}
          >
            {option}
            <input
              type="radio"
              name="table-option"
              value={option}
              checked={tableSelected === option}
              className="input-radio"
              //   onClick={handleChangeSelected}
              onChange={handleChangeSelected}
            />
          </label>
        ))}
      </div>
    </section>
  );
};

export default TableSelector;
