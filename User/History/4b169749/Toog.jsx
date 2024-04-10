import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
import CalendarButton from '../../../../components/owner-manager/CalendarButton/CalendarButton';
import CalendarPicker from '../../../../components/owner-manager/CalendarPicker/CalendarPicker';
import {
  getStatisticsDetailsHistory,
  getStatisticsDetailsTop5,
  getStatisticsDetailsTotal
} from '../../../../redux/slices/organizer/organizer';
import { formatNumber, formatPrice } from '../../../../utils/formatNumber';
import Item from '../../Items/Items';
import './StatisticsDetails.scss';
const StatisticsDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getDate = new Date();
  const { name, type } = useParams();
  const getHistory = useSelector(
    (state) => state.organizer.organizer.statisticsDetails.history
  );
  const getTop = useSelector(
    (state) => state.organizer.organizer.statisticsDetails.top5
  );
  const getTotal = useSelector(
    (state) => state.organizer.organizer.statisticsDetails.total?.data
  );
  const [data, setData] = useState([]);
  const [date, setDate] = useState(`${new Date().toLocaleDateString()}`);
  const [isOpen, setIsOpen] = useState(false);
  const getDetails = useSelector((state) => state.organizer.organizer.details);
  const initialValue = {
    initial: `${getDate.getFullYear()}-01-01`,
    end: `${getDate.getFullYear()}-12-30`
  };
  useEffect(() => {
    if (type === 'total-facturado') {
      setData(getHistory);
    }
    if (type === 'mas-pedidos') {
      setData(getTop);
    }
  }, []);
  const handleClick = (initial, end) => {
    dispatch(
      getStatisticsDetailsTotal({
        idParty: getDetails._id,
        desde: initial,
        hasta: end
      })
    );
    dispatch(
      getStatisticsDetailsTop5({
        idParty: getDetails._id,
        desde: initial,
        hasta: end
      })
    );
    dispatch(
      getStatisticsDetailsHistory({
        idParty: getDetails._id,
        desde: initial,
        hasta: end
      })
    );
  };
  return (
    <>
      <div className="layout-primary statistics-details-container">
        <Header
          backbutton={() => navigate(-1)}
          party={getDetails.nameParty}
          logoParty={getDetails.imageParty}
        />
        <div className="statistics-header">
          <div className="buttons">
            <p className="buttons__title">Total facturado</p>
            <CalendarButton date={date} onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <p className="details-price-title">
          {getTotal
            ? formatPrice(getTotal?.totalfacturado, getDetails.currency)
            : ''}
          €
        </p>
        <div className="data-container">
          {data?.map((order, i) =>
            type === 'total-facturado' ? (
              <Item
                key={i}
                data={{
                  date: order.created,
                  total: `${formatNumber(order.total)}€`,
                  details: order.totals
                }}
                line={i < data.length - 1}
              />
            ) : type === 'mas-pedidos' ? (
              <Item
                key={i}
                data={{
                  name: order.bebida,
                  total: `${order.cantidadFinal} ${
                    order.cantidadFinal === 1 ? 'un' : 'uns'
                  }`
                }}
              />
            ) : null
          )}
        </div>
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

export default StatisticsDetails;
