import BackButton from "components/BackButtom/BackButton";
import "./search-bar.scss";
import Input from "components/Input/Input";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "models";

interface SearchBarInterface {
  search: string;
  setSearch: (value: any) => void;
}
const SearchBar: React.FC<SearchBarInterface> = ({ search, setSearch }) => {
  const navigate = useNavigate();
  return (
    <div className="search-bar">
      <BackButton onClick={() => navigate(ROUTES.HOME)} />
      <div className="search-bar__input-search-wrapper">
        <Input
          type="text"
          name="search"
          placeHolder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
