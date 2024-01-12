import React from "react";

const DroupDowm = ({ onchange }) => {
  return (
    <div>
      <div className="dropdown mt-2  mb-5 ">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </button>
        <ul className="dropdown-menu" onClick={onchange}>
          <li>
            <a className="dropdown-item" href="#">
              food
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              travel
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              all
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DroupDowm;
