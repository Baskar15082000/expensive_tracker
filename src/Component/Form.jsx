import React from "react";

const Form = ({ onchangeamount, onchangeitems, description, amount }) => {
  return (
    <form className="body d-flex">
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={onchangeamount}
      />
      <input
        type="text"
        placeholder="amount"
        onChange={onchangeitems}
        value={amount}
      />
    </form>
  );
};

export default Form;
