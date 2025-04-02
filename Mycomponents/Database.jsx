import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Database.css";

function Database() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div>
      <div className="Navbar1" style={{ width: "96%" }}>
        <div className="left1">
          <div className="anchordivs1">Edit</div>
          <div className="anchordivs1">View Site</div>
        </div>

        {/* Button to toggle date picker */}
        <div className="btnright" onClick={() => setShowDatePicker(!showDatePicker)} style={{cursor:"pointer"}}>
          Date Range
        </div>
      </div>

      {/* Date Picker Container */}
      {showDatePicker && (
        <div className="datePickerContainer">
          <label>From: </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={15}  // Show a scrollable list of years
          />

          <label>To: </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={15}
          />
        </div>
      )}

      <div className="table">
        {/* Example table for Company A */}
        <table>
          <tr>
            <th colSpan={2} style={{ textAlign: "center", backgroundColor: "#0077b6", color: "white" }}>Company A</th>
          </tr>
          <tr>
            <td style={{ fontWeight: "600", color: "white", backgroundColor: "#669bbc" }}>Vehicle no</td>
            <td style={{ fontWeight: "600", color: "white", backgroundColor: "#669bbc" }}>Count</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>4</td>
          </tr>
        </table>
        <table>
          <tr>
            <th colSpan={2} style={{ textAlign: "center", backgroundColor: "#0077b6", color: "white" }}>Company B</th>
          </tr>
          <tr>
            <td style={{ fontWeight: "600", color: "white", backgroundColor: "#669bbc" }}>Vehicle no</td>
            <td style={{ fontWeight: "600", color: "white", backgroundColor: "#669bbc" }}>Count</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>1</td>
          </tr>
        </table>
        <table>
          <tr>
            <th colSpan={2} style={{ textAlign: "center", backgroundColor: "#0077b6", color: "white" }}>Company C</th>
          </tr>
          <tr>
            <td style={{ fontWeight: "600", color: "white", backgroundColor: "#669bbc" }}>Vehicle no</td>
            <td style={{ fontWeight: "600", color: "white", backgroundColor: "#669bbc" }}>Count</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>2</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Database;
