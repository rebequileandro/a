import './SelectDiv.scss';

function SelectDiv({ selectProps, label, setState, error, options }) {
  const handleChange = (e) => {
    console.log('selectDiv', e);
    setState(e.target.value);
  };

  return (
    <div className="select-div">
      <label htmlFor={selectProps.name}>{label}</label>

      <div className="select-wrapper">
        <select {...selectProps} onChange={handleChange}>
          {Object.keys(options).map((keyname, i) => (
            <option key={i} value={keyname}>
              {options[keyname]}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default SelectDiv;
