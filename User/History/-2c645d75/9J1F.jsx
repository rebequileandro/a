import React, { useEffect, useState } from 'react';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';
import './statistics.scss';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  detailsParty,
  getbyId,
  getStatisticsDetailsHistory,
  getStatisticsDetailsTop5,
  getStatisticsDetailsTotal
} from '../../../redux/slices/organizer/organizer';
import PdfButton from '../../../components/owner-manager/PdfButton/PdfButton';
import CalendarButton from '../../../components/owner-manager/CalendarButton/CalendarButton';
import { Chart } from '../../../components/owner-manager/Chart/Chart';
import CalendarPicker from '../../../components/owner-manager/CalendarPicker/CalendarPicker';
import Navigation_Road from '../../../components/global/Navigation_Road/Navigation_Road';
import { formatNumber } from '../../../utils/formatNumber';
import routes from '../../../models/routes.models';
const Statistics = () => {
  const getDate = new Date();
  const [date, setDate] = useState(`${new Date().toLocaleDateString()}`);
  const getTotal = useSelector(
    (state) => state.organizer.organizer.statisticsDetails.total?.data
  );
  const getTop = useSelector(
    (state) => state.organizer.organizer.statisticsDetails.top5
  );
  const getTotalUnits = useSelector(
    (state) => state.organizer.organizer.statisticsDetails.totalUnits
  );
  const getDetails = useSelector((state) => state.organizer.organizer.details);
  const getUser = useSelector((state) => state.global.user);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const idParty = getUser?.idParty;
  const initialValue = {
    initial: `${getDate.getFullYear()}-01-01`,
    end: `${getDate.getFullYear()}-12-30`
  };
  console.log(getTotal);
  useEffect(() => {
    if (!getTop.length || getTotal.totalVentasFinal === undefined) {
      dispatch(
        getStatisticsDetailsHistory({
          idParty: id ? id : idParty,
          desde: initialValue.initial,
          hasta: initialValue.end
        })
      );
      dispatch(
        getStatisticsDetailsTotal({
          idParty: id ? id : idParty,
          desde: initialValue.initial,
          hasta: initialValue.end
        })
      );
      dispatch(
        getStatisticsDetailsTop5({
          idParty: id ? id : idParty,
          desde: initialValue.initial,
          hasta: initialValue.end
        })
      );
      id ? dispatch(detailsParty({ id })) : dispatch(getbyId(idParty));
    }
  }, []);
  const others = () => {
    let others = 0;
    getTop?.map((e) => {
      if (
        e.bebida !== getTop[0]?.bebida &&
        e.bebida !== getTop[1]?.bebida &&
        e.bebida !== getTop[2]?.bebida &&
        e.bebida !== getTop[3]?.bebida &&
        e.bebida !== getTop[4]?.bebida
      ) {
        others = others + e.cantidadFinal;
      }
    });
    return others;
  };
  const handleClick = (initial, end) => {
    dispatch(
      getStatisticsDetailsHistory({
        idParty: id ? id : idParty,
        desde: initial,
        hasta: end
      })
    );
    dispatch(
      getStatisticsDetailsTotal({
        idParty: id ? id : idParty,
        desde: initial,
        hasta: end
      })
    );
    dispatch(
      getStatisticsDetailsTop5({
        idParty: id ? id : idParty,
        desde: initial,
        hasta: end
      })
    );
  };

  return (
    <>
      <Header backbutton={() => navigate(-1)} title={'Estadísticas'} />
      <div className="layout-primary statistics-container">
        <Navigation_Road
          road={{
            start: 'Mis estadisticas',
            path1: `${getDetails[0]?.nameParty}`
          }}
        />
        <div className={'title'}>
          <CalendarButton date={date} onClick={() => setIsOpen(true)} />
          <PdfButton />
        </div>
        <div className="data-container">
          <div className="values-container-row">
            <div className="average-value-section">
              <h2 className="average-value-section__title">Orden promedio</h2>

              <h3 className="average-value-section__value">
                ${getTotal ? formatNumber(getTotal?.valorPedidoPromedio) : ''}
              </h3>
              {/* <p style={{ color: totalPromedio >= 1 ? "#17b029" : "#b00009" }}>
                {totalPromedio >= 1 ? "+" : null}
                {totalPromedio}%
              </p> */}
            </div>
            <div className="clients-value-section">
              <h2 className="clients-value-section__title">Clientes</h2>
              <h3 className="clients-value-section__value">
                {getTotal ? formatNumber(getTotal?.clientes) : ''}
              </h3>
            </div>
          </div>

          <div className="total-earnings-section">
            <h2 className="total-earnings-section__title">Total facturado</h2>
            <div className="total-earnings-row">
              <h3 className="total-earnings-section__value">
                ${getTotal ? formatNumber(getTotal?.totalfacturado) : ''}
              </h3>
              <button
                className="total-earnings-section__button details"
                onClick={() =>
                  navigate(
                    `${routes.owner.statisticsHistory}/${getDetails[0].nameParty}/total-facturado`
                  )
                }
              >
                Ver detalle
              </button>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <h2 className="chart-container__title">Top 5 tragos</h2>

          <div className="chart-wrapper">
            <div className="chart">
              <div className="total">
                <h2>Total</h2>
                <h1>{getTotalUnits}</h1>
              </div>
              <Chart
                first={{
                  value: getTop[0]?.cantidadFinal,
                  label: getTop[0]?.bebida
                }}
                second={{
                  value: getTop[1]?.cantidadFinal,
                  label: getTop[1]?.bebida
                }}
                third={{
                  value: getTop[2]?.cantidadFinal,
                  label: getTop[2]?.bebida
                }}
                fourth={{
                  value: getTop[3]?.cantidadFinal,
                  label: getTop[3]?.bebida
                }}
                fifth={{
                  value: getTop[4]?.cantidadFinal,
                  label: getTop[4]?.bebida
                }}
                others={others()}
              />
            </div>
          </div>
          {/* <div className="details-button">
            <button
              className="details"
              onClick={() =>
                navigate(
                  `/historial-de-estadisticas/${getDetails[0].nameParty}/mas-pedidos`
                )
              }
            >
              Ver detalle
            </button>
          </div> */}
        </div>

        <TabbarOrganizer
          active={getUser.rol === 'unitManager' ? 'home' : 'statistics'}
        />
      </div>
      {isOpen && (
        <CalendarPicker
          onClick={handleClick}
          setIsOpen={setIsOpen}
          currentDate={date}
          setCurrentDate={setDate}
        />
      )}
    </>
  );
};
export default Statistics;
