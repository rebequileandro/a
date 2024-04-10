import "./bzrp-tour.scss";
import data from "../data";
import Item from "./conponents/Item/Item";
const BzrpTour: React.FC = () => {
  return (
    <main className="bzrp-tour">
      {data.nextDates.map((element, index) => (
        <Item key={element.date + index} {...element} />
      ))}
    </main>
  );
};

export default BzrpTour;
