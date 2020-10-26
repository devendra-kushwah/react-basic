import React, { useState } from "react";

const useSelect = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const DropDown = () => (
    <>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        name="role"
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option value="select role">select role</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );

  return [state, DropDown, setState];
};

export default useSelect;
