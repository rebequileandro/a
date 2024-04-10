import { useSelector } from 'react-redux';
import Select from '../../../../../components/global/Select/Select/Select';
import './table-selector.scss';

const TableSelector = () => {
  const floorsToChoose = useSelector(
    (state) => state.partyUser.checkout.danceFloorBar.floors
  );
  const onChangeSelect = () => {};
  return (
    <section className="table-selector">
      <p className="table-selector__description">
        Selecciona la zona y el nro de la mesa, el numero esta en el Qr que
        escaneaste.
      </p>
      <Select
        placeholder={'selecciona una planta'}
        onChange={onChangeSelect}
        options={floorsToChoose}
        icon
      />
    </section>
  );
};

export default TableSelector;
