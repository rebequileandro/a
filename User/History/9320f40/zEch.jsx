import './delivery-methods.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/global/Button/Button';
import { Header } from '../../../../components/global/Header/Header';
import Select from '../../../../components/global/Select/Select/Select';

import { sendFloorBar } from '../../../../redux/slices/partyUser/checkout';

import routes from '../../../../models/routes.models';
import TableSelector from './TableSelector/TableSelector';

const DeliveryMethods = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [method, setMethod] = useState(null);

  //nos traemos la data de los pisos y sus barras
  const floorsToChoose = useSelector(
    (state) => state.partyUser.checkout.danceFloorBar.floors
  );
  const currentFloor = useSelector(
    (state) => state.partyUser.checkout.danceFloorBar.selected
  );
  const barsToChoose = useSelector(
    (state) => state.partyUser.checkout.danceFloorBar.bars
  );

  //estos tres estados locales manejan la información que utiliza el select, la img y el button, con un initialState que es el primer objeto de cada elemento
  const [floor, setFloor] = useState(floorsToChoose[0]);
  const [bars, setBars] = useState([]);

  //para poder pintar el primer button como si estuviera predeterminado con focus, utilizamos el id de cada barra para condicionar el renderizado
  const [imageBar, setImageBar] = useState({});

  //info necesaria para retirar el trago, al accionarse handleCLick es enviada
  const [barSelected, setBarSelected] = useState({});

  //Es utilizado en el componente Select, el cual además de setear el piso, vuelve a filtrar las barras  dependiendo la selección y por ultimo actualiza la imagen. Por cada cambio en el select, el initial state pasa a ser el primer elemento de buttons e img
  const handleFilter = (value) => {
    setFloor(value);
    const filteredBars = barsToChoose?.filter((bar) => bar.pista === value);
    setBars(filteredBars);
    setImageBar({ image: filteredBars[0]?.image, id: filteredBars[0]?.nombre });
  };

  //su unica función es setear la informacion de image cada vez que seleccionamos una barra apretando button y guardar la informacion seleccionada para posteriormente enviarla
  const handleButton = ({ image, id, nameBar, nameFloor }) => {
    setImageBar({ image: image, id: id });
    setBarSelected({ bar: nameBar, floor: nameFloor, image: image, id: id });
  };

  //Si todo esta en orden, envía la información de la barra seleccionada a checkout para proceder con el pago y la orden
  const handleCLick = () => {
    if (barSelected?.bar && barSelected?.floor && barSelected?.image) {
      dispatch(sendFloorBar(barSelected));
      return navigate(routes.partyUser.checkout);
    }
  };
  useEffect(() => {
    //setea los estados iniciales
    //se hace un primer filtrado para el initialState de bars, ya que luego por cada renderizado habra un nuevo filtrado en handleFilter
    const initialStateBars = barsToChoose?.filter((bar) => bar.pista === floor);
    setBars(initialStateBars);
    setImageBar({
      image: initialStateBars[0]?.image,
      id: initialStateBars[0]?.nombre
    });
    setBarSelected({
      id: initialStateBars[0]?.nombre,
      floor: floorsToChoose[0],
      bar: initialStateBars[0]?.nombre,
      image: initialStateBars[0]?.image
    });
  }, [floor]);

  return (
    <>
      <Header
        backbutton={() => navigate(routes.partyUser.checkout)}
        title={'Elige la barra o tu mesa'}
      />
      <div className="layout-primary delivery-methods">
        <div className="delivery-methods__select delivery-methods__select--method">
          <Select
            // initialState={floor}
            placeholder={'Selecciona tu método de atención.'}
            onChange={setMethod}
            options={['POR BARRA', 'A LA MESA']}
            icon
            gradientSecondary={method}
          />
        </div>

        {method === 'POR BARRA' && (
          <>
            <section className="section-bar-floor">
              <p className="section-bar-floor__description">
                Selecciona la zona y la barra por la que vas a retirar tu
                pedido.
              </p>
              <div className="delivery-methods__select">
                <Select
                  initialState={floor}
                  onChange={handleFilter}
                  options={floorsToChoose}
                  icon
                />
              </div>

              <div className="section-bar-floor__button--container">
                {bars?.map((bar) => {
                  return (
                    <div
                      className="section-bar-floor__button--container__button"
                      key={bar.nombre}
                    >
                      <button
                        // este condicional es para que se pinte el primer boton cada vez que el select cambia
                        className={
                          bar.nombre === imageBar.id
                            ? 'bar-selection-btn bar-selection-btn--active'
                            : 'bar-selection-btn'
                        }
                        onClick={() =>
                          handleButton({
                            image: bar.image,
                            id: bar.nombre,
                            nameBar: bar.nombre,
                            nameFloor: floor
                          })
                        }
                      >
                        {bar.nombre}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="section-bar-image">
              <img
                className="section-bar-image__image"
                src={imageBar?.image}
                alt="barritas-bartencias"
                loading="lazy"
              />
            </section>
            <Button children={'Aceptar'} onClick={() => handleCLick()} />
          </>
        )}
        {method === 'A LA MESA' && <TableSelector />}
      </div>
    </>
  );
};

export default DeliveryMethods;
