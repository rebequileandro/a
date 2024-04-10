import React, { useEffect, useState } from 'react';

import './cashRegister.scss';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';
import { getCash } from '../../../redux/slices/Organizer';
import CalendarPicker from '../../../components/owner-manager/CalendarPicker/CalendarPicker';
import { Header } from '../../../components/global/Header/Header';
import PdfButton from '../../../components/owner-manager/PdfButton/PdfButton';
import CalendarButton from '../../../components/owner-manager/CalendarButton/CalendarButton';
import InputDiv from '../../../components/global/InputDiv/InputDiv';
import Item from './Item/Item';

const CashRegister = () => {
  const { id } = useParams();
  const date = new Date();
  const getUser = useSelector((state) => state.global.user);
  const getCashRegister = useSelector((state) => state.organizer.cash);
  const getDetail = useSelector((state) => state.organizer.details[0]);
  const [currentDate, setCurrentDate] = useState(
    date.toLocaleDateString('en-GB')
  );
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCash({ idParty: id }));
    if (getCashRegister.length) {
      getCashRegister?.forEach((e) => {
        setTotal(total + parseInt(e.total));
      });
    }
  }, [getCashRegister.length]);
  return (
    <>
      {isOpen && (
        <CalendarPicker setCurrentDate={setCurrentDate} setIsOpen={setIsOpen} />
      )}
      <div className="cash-register-container">
        <Header
          backbutton={() => navigate(`/mis-locales/${id}`)}
          OrganizerParty={{
            party: 'ajustes',
            path: `${getDetail?.nameParty} > Caja`
          }}
        />
        <div className="filters-container">
          <div className="filters">
            <div className="filter-row">
              <PdfButton />
              <CalendarButton
                date={currentDate}
                onClick={() => setIsOpen(true)}
              />
            </div>
            <InputDiv
              inputProps={{
                type: 'search',
                name: 'search',
                placeholder: 'Buscar'
              }}
            />
          </div>
        </div>
        <div className="data-container">
          {getCashRegister?.map((e, i) => {
            return <Item key={i} data={e} />;
          })}
        </div>
        <div className="total">
          <p>Total</p>
          <span>${total}</span>
        </div>
      </div>
    </>
  );
};

export default CashRegister;
