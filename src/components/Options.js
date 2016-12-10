import React from 'react';

const getInputId = key => (`option-${key}`);

const renderOption = (opt, selectedOption, onChange) => (
  <div key={opt.value} className="col s2">
    <input
      type="radio"
      id={getInputId(opt.name)}
      name="sex"
      value={opt.value}
      checked={selectedOption === opt.value}
      className="left-align"
      onChange={onChange}
    />
    <label htmlFor={getInputId(opt.name)}>{opt.value}</label>
  </div>
);

const Options = ({ options, selectedOption, label, onChange}) => {
  return (
    <div className="row">
      <div className="col s6 left-align">
        <label htmlFor="options-container">{label}</label>
        <div id="options-container" className="row left-align">
          { options.map(opt => (renderOption(opt, selectedOption, onChange))) }
        </div>
      </div>
    </div>
  );
};

export default Options;
