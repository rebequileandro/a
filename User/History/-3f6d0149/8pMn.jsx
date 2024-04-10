import React, { useState } from 'react';
import searchIcon from '../../../assets/global/search.svg';
import './searchBar.scss';
import Lottie from 'lottie-react';
import iconErase from '../../../assets/icons/icon_close.svg';
import searchAnimateIcon from '../../../assets/animations/search.json';
import { useRef } from 'react';
export default function SearchBar({
  input,
  handleChange,
  placeholder,
  notIcons,
  disableInput,
  eraseIcon,
  eraseFunction,
  inputNumber
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const animationRef = useRef();
  const [data, setdata] = useState('');
  const handleRemoveEntry = () => {
    handleChange({
      target: { value: '' },
      preventDefault: () => ''
    });
    animationRef.current.playSegments([31, 62]);
  };
  const onKeyDown = (e) => {
    // alert(JSON.stringify(e.code));
    setdata(e.keyCode);
    console.log(e);
    if (e.target.value.length === 0 && e.keyCode === 8) {
      animationRef.current.playSegments([31, 62]);
    } else if (e.target.value.length === 1 && e.keyCode !== 8) {
      animationRef.current.playSegments([1, 31]);
    }
  };
  return (
    <section className="section-searchBar">
      <form
        className="section-searchBar__form"
        onSubmit={(e) => handleSubmit(e)}
        autoComplete="off"
      >
        <div className="section-searchBar__form__searchWrap">
          <input
            disabled={disableInput}
            autoComplete="off"
            placeholder={placeholder ? placeholder : 'Buscar'}
            type={inputNumber ? 'number' : 'text'}
            value={input}
            onChange={handleChange}
            id="searchBar"
            onKeyUp={onKeyDown}
          />
          {
            notIcons ? null : (
              <Lottie
                animationData={searchAnimateIcon}
                className="section-searchBar__form__searchWrap__searchAnimation"
                loop={false}
                initialSegment={[0, 1]}
                lottieRef={animationRef}
                onClick={() => (input.length ? handleRemoveEntry() : null)}
              />
            )
            // <img src={searchIcon} alt="search" />
          }
          {eraseIcon ? (
            <img
              className="section-searchBar__form__searchWrap__imagex"
              onClick={eraseFunction}
              src={iconErase}
              alt="x"
            />
          ) : null}
        </div>
      </form>
      <p>{JSON.stringify(data)}</p>
    </section>
  );
}
