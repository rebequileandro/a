import React from 'react';
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
  //remove input
  const handleRemoveEntry = () => {
    animationRef.current.playSegments([31, 62]);
    handleChange({
      target: { value: '' },
      preventDefault: () => ''
    });
  };

  const handleInputChange = (e) => {
    handleChange(e);
    //activate animation
    if (e.target.value.length === 0 && !e.nativeEvent.data) {
      animationRef.current.playSegments([40, 62]);
    }
    if (e.target.value.length === 1 && e.nativeEvent.data) {
      animationRef.current.playSegments([1, 31], true);
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
            onChange={handleInputChange}
            id="searchBar"
          />
          {notIcons ? null : (
            <Lottie
              animationData={searchAnimateIcon}
              className="section-searchBar__form__searchWrap__searchAnimation"
              loop={false}
              autoplay={false}
              lottieRef={animationRef}
              onClick={() => (input.length ? handleRemoveEntry() : null)}
            />
          )}
          {eraseIcon ? (
            <Lottie
              animationData={searchAnimateIcon}
              className="section-searchBar__form__searchWrap__searchAnimation"
              loop={false}
              initialSegment={[9, 32]}
              onClick={eraseFunction}
            />
          ) : null}
        </div>
      </form>
    </section>
  );
}
