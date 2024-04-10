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
export const Statistics = () => {
  const getDate = new Date();
  const [date, setDate] = useState(`${new Date().toLocaleDateString()}`);
  const getTotal = useSelector(
    (state) => state.organizer.organizer.statisticsDetails.total
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
    initial: `${getDate.getFullYear()}-${('0' + (getDate.getMonth() + 1)).slice(
      -2
    )}-${('0' + getDate.getDate()).slice(-2)}`,
    end: `${getDate.getFullYear()}-${('0' + (getDate.getMonth() + 1)).slice(
      -2
    )}-${('0' + (getDate.getDate() + 2)).slice(-2)}`
  };

  useEffect(() => {
    if (!getTop.length || !getTotal.totalVentasFinal) {
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
      <div className="statistics-container">
        <Header
          backbutton={() => navigate(-1)}
          OrganizerParty={{
            party: 'Mis estadisticas',
            path: `${getDetails[0]?.nameParty}`
          }}
        />
        <div className={'title'}>
          <PdfButton />
          <CalendarButton date={date} onClick={() => setIsOpen(true)} />
        </div>
        <div className="data-container">
          <div className="secodary-container">
            <h2>total facturado</h2>
            <div className="number-container">
              <h1>${getTotal.totalVentasFinal}</h1>
              {/* <p style={{ color: totalPorsents >= 1 ? "#17b029" : "#b00009" }}>
                {totalPorsents >= 1 ? "+" : null}
                {totalPorsents}%
              </p> */}
            </div>
            <button
              className="details"
              onClick={() =>
                navigate(
                  `/historial-de-estadisticas/${getDetails[0].nameParty}/total-facturado`
                )
              }
            >
              {`Ver detalle >`}
            </button>
          </div>
          <div className="secodary-container">
            <h2>clientes</h2>
            <div className="number-container">
              <h1>{getTotal.totalcantidadpedidos}</h1>
              {/* <p style={{ color: clietporsents >= 1 ? "#17b029" : "#b00009" }}>
                {clietporsents >= 1 ? "+" : null}
                {clietporsents}%
              </p> */}
            </div>
          </div>
        </div>
        <div className="chart-container">
          <div className="chart-title">
            <h1>top 5 tragos</h1>
          </div>
          <div className="chart-wrapper">
            <div className="chart">
              <div className="total">
                <h2>total</h2>
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
          <div className="details-button">
            <button
              className="details"
              onClick={() =>
                navigate(
                  `/historial-de-estadisticas/${getDetails[0].nameParty}/mas-pedidos`
                )
              }
            >
              {`Ver detalle >`}
            </button>
          </div>
        </div>
        <div className="data-container">
          <div className="secodary-container">
            <h2>valor pedido promedio</h2>
            <div className="number-container">
              <h1>${Math.floor(getTotal.valorPromedioPedido)}</h1>
              {/* <p style={{ color: totalPromedio >= 1 ? "#17b029" : "#b00009" }}>
                {totalPromedio >= 1 ? "+" : null}
                {totalPromedio}%
              </p> */}
            </div>
          </div>
        </div>
        <TabbarOrganizer
          active={getUser.rol === 'unitManager' ? 'home' : 'statistics'}
        />
      </div>

      <CalendarPicker
        onClick={handleClick}
        setIsOpen={setIsOpen}
        currentDate={date}
        setCurrentDate={setDate}
      />
    </>
  );
};
