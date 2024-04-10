import { useSelector } from 'react-redux';
import Select from '../../../../../components/global/Select/Select/Select';
import './table-selector.scss';
import { useEffect, useState } from 'react';

const TableSelector = () => {
  const [tableOptions, setTableOptions] = useState(null);
  const floorsToChoose = useSelector(
    (state) => state.partyUser.checkout.danceFloorBar.floors
  );
  const onChangeSelect = () => {};
  useEffect(() => {
    let table = [];
    for (let index = 1; index < 50; index++) {
      table.push(`MESA ${index}`);
    }
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
    </section>
  );
};

export default TableSelector;
