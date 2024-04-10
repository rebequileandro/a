import "./InputDiv.scss";

function InputDiv({ inputProps, label, setState, error, onBlur, style }) {
  const handleChange = (e) => setState(e.target.value);

  return (
    <div className={error ? "input-div error" : "input-div"}>
      <label htmlFor={inputProps.name}>{label}</label>

      <div className="input-wrapper" style={style ? style : null}>
        <input {...inputProps} onChange={handleChange} onBlur={onBlur} />
      </div>

      {error && <p className="error">*{error}</p>}
    </div>
  );
}

export default InputDiv;
