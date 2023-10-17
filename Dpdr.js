import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import "./Dpdr.css";

export const Dpdr = ({ rows, editRow }) => {
  return (
    <div className="container">
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>ItemCode</th>
              <th>Description</th>
              <th>Batch No</th>
              <th>Operation</th>
              <th>MachineCode</th> 
              <th>plannedQty</th>
              <th>ActualQty</th>
              <th>Scrap</th>
              <th>UOM</th>
              <th>Workers</th>
              <th>ReMarks</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, value) => {
              return (
                <tr key={value}>
                  <td>{row.Date}</td>
                  <td>{row.ItemCode}</td>
                  <td>{row.Description}</td>
                  <td>{row.BatchNo}</td>
                  <td>{row.Operation}</td>
                  <td>{row.MachineCode} </td>
                  <td>{row.PlannedQty}</td>
                  <td>{row.ActualQty}</td>
                  <td>{row.Scrap}</td>
                  <td>{row.UOM}</td>
                  <td>{row.Workers}</td>
                  <td>{row.ReMarks}</td>
                  <td>
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(value)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

