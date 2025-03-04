import React, { useState } from "react";
import "./prediction.css";

const Prediction= () => {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    bmi: "",
    pulseRate: "",
    cycleRegularity: "",
    cycleLength: "",
    marriageStatus: "",
    pregnant: "",
    abortions: "",
    hip: "",
    waist: "",
    waistHipRatio: "",
    weightGain: "",
    hairGrowth: "",
    skinDarkening: "",
    hairLoss: "",
    pimples: "",
    fastFood: "",
    regularExercise: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace this with API call to prediction model
  };

  return (
    <div className="form-container">
      <h2>Health Prediction Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Age (yrs)</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Weight (kg)</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Height (cm)</label>
          <input type="number" name="height" value={formData.height} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>BMI</label>
          <input type="number" step="0.01" name="bmi" value={formData.bmi} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Cycle Regularity (Y/N)</label>
          <select name="cycleRegularity" value={formData.cycleRegularity} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="input-group">
          <label>Cycle Length (days)</label>
          <input type="number" name="cycleLength" value={formData.cycleLength} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Pregnant (Y/N)</label>
          <select name="pregnant" value={formData.pregnant} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="input-group">
          <label>Regular Exercise (Y/N)</label>
          <select name="regularExercise" value={formData.regularExercise} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <button type="submit">Predict</button>
      </form>
    </div>
  );
};

export default Prediction;
