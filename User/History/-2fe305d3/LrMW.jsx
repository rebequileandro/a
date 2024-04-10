import React, { useState } from 'react';
import './items.scss';
import arrow from '../../../assets/icons/icon_arrow-white.svg';
const Item = ({ data, line }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="item-activities-container"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="row-container">
        <div className="item">
          <p className="item__price">{data?.total}</p>
          {data?.time ? (
            <p>
              {new Date(data?.time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          ) : data?.date ? (
            <p className="item__date">
              {`${new Date(data?.date).toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'long'
              })}, ${new Date(data?.date).getHours()}:${
                new Date(data?.date).getMinutes().toString().length === 1
                  ? '0' + new Date(data?.date).getMinutes()
                  : new Date(data?.date).getMinutes()
              }`}
            </p>
          ) : null}
          <div className="name">
            <p>{data?.name}</p>
          </div>
        </div>
        {data?.details && (
          <img
            className={`row-image ${isOpen && 'show'}`}
            src={arrow}
            alt="desplegar"
          />
        )}
      </div>
      <div className={`content ${isOpen && 'show-content'}`}>
        {data?.details?.map((e) => (
          <div className="item-content" key={e.title}>
            <p className="item-content__title">
              {e.cantidad} x {e.title}
            </p>
          </div>
        ))}
      </div>
      {line && <div className="pink-gradient-line-1">&nbsp;</div>}
    </div>
  );
};

export default Item;
