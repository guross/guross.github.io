import React from "react";

const InputGroup = ({ total, name, setID }) => {
  return (
    <div>
      <select
        onChange={(e) => {
          setID(e.target.value);
        }}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="1" selected>Open this select menu</option>
        {[...Array(total).keys()].map((x) => {
          return (
            <option value={x + 1}>
              {name}-{x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
