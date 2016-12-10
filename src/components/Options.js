import React from 'react';

const Options = ({ options, selectedOption, onChange}) => {
  return (
    <div className="row">
      <div className="col s6 left-align">
        <label htmlFor="breed">Sex</label>
        <div className="row left-align">
          { options.map(opt => {
            return (
              <div key={opt.value} className="col s2">
                <input
                  type="radio"
                  id={opt.value}
                  name="sex"
                  value={opt.value}
                  checked={selectedOption === opt.value}
                  className="left-align"
                  onChange={onChange}
                />
                <label htmlFor={opt.value}>{opt.value}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Options;
