import React, { useState } from "react";
import "./DpdrData.css";


export const DpdrData = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(defaultValue || {
    Date: "",
    ItemCode: "",
    Description: "",
    BatchNo: "",
    Operation: "",
    MachineCode: "", // Fixed the field name
    PlannedQty: "",
    ActualQty: "",
    Scrap: "",
    UOM: "",
    Workers: "",
    Remarks: "",
  });

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.Date.trim()) {
      setErrors("");
      return true;
    } else {
      setErrors("Date required.");
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
 
        <div className="form-group">
            <label htmlFor="Date">Date:</label>
            <input
              style={{width:"100px"}}
              type="Date"
              name="Date"
              onChange={handleChange}
              value={formState.Date}
            />
         
            <label htmlFor="ItemCode">ItemCode:</label>
            <input
              name="ItemCode"
              onChange={handleChange}
              value={formState.ItemCode}
            />
         
            <label htmlFor="Description">Description:</label>
            <input
              name="Description"
              onChange={handleChange}
              value={formState.Description}
            />
         
            <label htmlFor="BatchNo">Batch No:</label>
            <input
              name="BatchNo"
              style={{width:"150px"}}
              onChange={handleChange}
              value={formState.BatchNo}
            />
       
            <label htmlFor="Operation">Operation:</label>
            <input
              name="Operation"
              onChange={handleChange}
              value={formState.Operation}
              className="effect-5"
            />
    
            <label htmlFor="MachineCode">Machine code:</label>
            <input
              name="MachineCode"
              onChange={handleChange}
              value={formState.MachineCode}
              style={{width:"150px"}}
            />
        
            <label htmlFor="PlannedQty">planned Qty:</label>
            <input
              name="PlannedQty"
              onChange={handleChange}
              value={formState.PlannedQty}
              style={{width:"150px"}}
            />
        
            <label htmlFor="ActualQty">Actual Qty:</label>
            <input
              name="ActualQty"
              onChange={handleChange}
              value={formState.ActualQty}
              style={{width:"150px"}}
            />
        
            <label htmlFor="Scrap">Scrap:</label>
            <input
              name="Scrap"
              onChange={handleChange}
              value={formState.Scrap}
              style={{width:"150px"}}
            />
         
            <label htmlFor="UOM" >UOM:</label>
            <input
              name="UOM"
              onChange={handleChange}
              value={formState.UOM}
              style={{width:"150px"}}
            />
         
            <label htmlFor="Workers">Workers:</label>
            <input
              name="Workers"
              onChange={handleChange}
              value={formState.Workers}
              className="effect-11"
            />
         
            <label htmlFor="ReMarks">ReMarks:</label>
            <input
              name="ReMarks"
              onChange={handleChange}
              value={formState.ReMarks}
              className="effect-12"
            />
          </div>
          
        <button
            type="submit"
            className="btns"
            onClick={handleSubmit}
          >
            Submit
          </button>
        {errors && <div className="error">{`Please include: ${errors}`}</div>}
      </div>
    </div>
  );
};


