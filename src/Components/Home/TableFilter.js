import React from "react";
import "./TableFilter.css";
import Search from "../../assets/Search.svg";
function TableFilter(props) {
  return (
    <div className="TableFilter-card">
      <div class="input-container">
        <img src={Search}></img>
        <input
          class="input-field"
          type="text"
          value={props.search}
          onChange={(e) => {
            props.changeSearch(e);
          }}
          placeholder="Search"
          name="psw"
        />
      </div>
      <div className="data-timeContainer">
        From:
        <input className="date-TableFilter" type="date" />
      </div>
      <div className="data-timeContainer">
        To:
        <input className="date-TableFilter" type="date" />
      </div>
    </div>
  );
}

export default TableFilter;
