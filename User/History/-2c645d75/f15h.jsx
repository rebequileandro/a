import React, { useEffect, useState } from 'react';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';
import './statistics.scss';
import { Header } from '../../../components/global/Header/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import PieChart_top5 from '../../../components/owner-manager/Charts/PieCharts/PieChart_top5';
import inventorySvg from '../../../assets/Owner/inventory_nav_option.svg';
import staffSvg from '../../../assets/Owner/staff_nav_option.svg';
import menuSvg from '../../../assets/Owner/menu_nav_option.svg';
import Popup_Alert from '../../../components/global/Popup_Alert/Popup_Alert';

const Statistics = () => {
  const getDate = new Date();
  const [date, setDate] = useState(`${new Date().toLocaleDateString()}`);
  const getTotal = useSelector(
    (state) => state.organizer.organizer.statisticsDetails.total?.data
  );
  const getTop = useSelector(
    (state) => state.organizer.organizer.statisticsDetails.top5
  );

  const getDetails = useSelector((state) => state.organizer.organizer.details);
  const getUser = useSelector((state) => state.global.user);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const initialValue = {
    initial: `${getDate.getFullYear()}-01-01`,
    end: `${getDate.getFullYear()}-12-30`
  };
  console.log(getTotal);
  useEffect(() => {
    if (!getTop.length || getTotal.totalVentasFinal === undefined) {
      dispatch(
        getStatisticsDetailsHistory({
          idParty: id,
          desde: initialValue.initial,
          hasta: initialValue.end
        })
      );
      dispatch(
        getStatisticsDetailsTotal({
          idParty: id,
          desde: initialValue.initial,
          hasta: initialValue.end
        })
      );
      dispatch(
        getStatisticsDetailsTop5({
          idParty: id,
          desde: initialValue.initial,
          hasta: initialValue.end
        })
      );
      dispatch(detailsParty({ id }));
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
        idParty: id,
        desde: initial,
        hasta: end
      })
    );
    dispatch(
      getStatisticsDetailsTotal({
        idParty: id,
        desde: initial,
        hasta: end
      })
    );
    dispatch(
      getStatisticsDetailsTop5({
        idParty: id,
        desde: initial,
        hasta: end
      })
    );
  };

  return (
    <>
      <Header title={'Estadísticas'} />
      <div className="layout-primary statistics-container">
        {getDetails.length ? (
          <>
            <Navigation_Road
              road={{
                start: 'Mis estadisticas',
                path1: `${getDetails[0]?.nameParty}`
              }}
            />
            <section className="owner-navigation-section">
              <div
                className="owner-navigation-section__menu"
                onClick={() => navigate(`${routes.owner.inventory}/${id}`)}
              >
                <div className="owner-navigation-section__backgrounds">
                  <img src={inventorySvg} alt="inventario" />
                </div>
                <div className="owner-navigation-section__option">
                  Inventario
                </div>
              </div>

              <div
                className="owner-navigation-section__inventory"
                onClick={() => navigate(`${routes.owner.menu}/${id}`)}
              >
                <div className="owner-navigation-section__backgrounds">
                  <img src={menuSvg} alt="menu" />
                </div>
                <div className="owner-navigation-section__option">Menú</div>
              </div>

              <div
                className="owner-navigation-section__staff"
                onClick={() => navigate(`${routes.owner.club}/${id}`)}
              >
                <div className="owner-navigation-section__backgrounds">
                  <img src={staffSvg} alt="staff" />
                </div>
                <div className="owner-navigation-section__option">Staff</div>
              </div>
            </section>
            <div className={'title'}>
              <CalendarButton date={date} onClick={() => setIsOpen(true)} />
              <PdfButton
                hrefAnchor={`${process.env.REACT_APP_API}/organizer/payment/exportdata/${id}`}
              />
            </div>
            <div className="data-container">
              <div className="values-container-row">
                <div className="average-value-section">
                  <h2 className="average-value-section__title">
                    Orden promedio
                  </h2>

                  <h3 className="average-value-section__value">
                    {getTotal
                      ? formatNumber(getTotal?.valorPedidoPromedio)
                      : ''}
                    €
                  </h3>
                </div>
                <div className="clients-value-section">
                  <h2 className="clients-value-section__title">Clientes</h2>
                  <h3 className="clients-value-section__value">
                    {getTotal ? formatNumber(getTotal?.clientes) : ''}
                  </h3>
                </div>
              </div>

              <div className="total-earnings-section">
                <h2 className="total-earnings-section__title">
                  Total facturado
                </h2>
                <div className="total-earnings-row">
                  <h3 className="total-earnings-section__value">
                    {getTotal ? formatNumber(getTotal?.totalfacturado) : ''}€
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
                  <div className="piechart-container">
                    <PieChart_top5 data={getTop} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Popup_Alert
            title="Elige un club para ver sus estadísticas."
            button="Seleccionar"
            redirect={() => navigate('/')}
          />
        )}
      </div>
      <TabbarOrganizer
        active={getUser.rol === 'unitManager' ? 'home' : 'statistics'}
      />
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
