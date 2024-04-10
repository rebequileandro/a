import './MyAccount.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../redux/slices/global/user';
import { Header } from '../../../components/global/Header/Header';

const { REACT_APP_API } = process.env;

export default function MyAccount() {
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);
  return (
    <div className="my-account">
      <Header backbutton={() => navigate('/settings')} title={'Mi cuenta'} />
    </div>
  );
}
